import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as cosmosdb from '@pulumi/azure/cosmosdb'
import * as dotenv from 'dotenv'
import * as automation from '@pulumi/pulumi/automation'
import * as pulumi from '@pulumi/pulumi'
import * as Identity from '@azure/identity'
import workload from '../workloads/workload'
import * as cosmos from '@azure/cosmos'
import { SqlDatabase } from '@pulumi/azure/cosmosdb'

dotenv.config({ path: './../.env' })

const handler = async (context: any, items: any) => {
  // Setup application insights
  appInsights
    .setup()
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(false)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  appInsights.defaultClient.setAutoPopulateAzureProperties(true)
  appInsights.start()

  console.log('entered handler database')

  return workload()
}

const getDatabaseResources = async () => {
  // Import shared resources
  const user = await automation.LocalWorkspace.create({}).then(ws =>
    ws.whoAmI().then(i => i.user)
  )
  const shared = new pulumi.StackReference(
    `${user}/${process.env.PULUMI_PROJECT_NAME}/shared`
  )

  const resourceGroupId = shared.requireOutput('resourceGroupId')
  const resourceGroup = azure.core.ResourceGroup.get(
    'ResourceGroup',
    resourceGroupId
  )
  const insightsId = shared.requireOutput('insightsId')
  const insights = azure.appinsights.Insights.get('Insights', insightsId)

  let sqlAccount = new cosmosdb.Account('databaseTrigger', {
    resourceGroupName: resourceGroup.name,
    offerType: 'Standard',
    consistencyPolicy: {
      consistencyLevel: 'Session'
    },
    geoLocations: [{ location: resourceGroup.location, failoverPriority: 0 }],
    enableFreeTier: true
  })

  const sqlDatabase = new cosmosdb.SqlDatabase('sqlDatabase', {
    accountName: sqlAccount.name,
    resourceGroupName: resourceGroup.name,
    throughput: 400
  })

  const sqlContainer = new cosmosdb.SqlContainer('sqlContainer', {
    databaseName: sqlDatabase.name,
    accountName: sqlAccount.name,
    resourceGroupName: resourceGroup.name,
    partitionKeyPath: '/id'
  })

  new azure.cosmosdb.SqlTrigger(
    'sqlTrigger',
    {
      containerId: sqlContainer.id,
      body: 'function trigger(){}',
      operation: 'Create',
      type: 'Post'
    },
    { deleteBeforeReplace: true }
  )

  const fs = require('fs')

  sqlAccount.name.apply(name =>
    fs.writeFile(
      '../.env',
      'ACCOUNTDB_ENDPOINT="https://' + name + '.documents.azure.com:443/"\n',
      { flag: 'a' },
      (err: any) => {
        if (err) {
          console.log('ERROR: Cosmos DB account endpoint not added')
          throw err
        }
        console.log('Cosmos DB account endpoint - Added')
      }
    )
  )

  sqlAccount.primaryKey.apply(key =>
    fs.writeFile(
      '../.env',
      'ACCOUNTDB_PRIMARYKEY="' + key + '"\n',
      { flag: 'a' },
      (err: any) => {
        if (err) {
          console.log('ERROR: Cosmos DB primary key not added')
          throw err
        }
        console.log('Cosmos DB primary key - Added')
      }
    )
  )


  // SQL on change trigger
  sqlAccount.onChange('databaseTrigger', {
    databaseName: sqlDatabase.name,
    collectionName: sqlContainer.name,
    
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET
    }
    
  });


  return {
    databaseName: sqlDatabase.name,
    containerName: sqlContainer.name
  }
}

module.exports = getDatabaseResources().then(e => e)

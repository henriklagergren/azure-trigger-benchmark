import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as cosmosdb from '@pulumi/azure/cosmosdb'
import * as dotenv from 'dotenv'
import * as automation from '@pulumi/pulumi/automation'
import * as pulumi from '@pulumi/pulumi'
import workload from '../workloads/workload'
import * as cosmos from '@azure/cosmos'
import { SqlDatabase } from '@pulumi/azure/cosmosdb'

dotenv.config({ path: './../.env' })

const handler = async (context: any) => {
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

  const correlationContext = appInsights.startOperation(
    context,
    'correlationContextDatabase'
  )

  const newOperationId = context['bindings']['items'][0]['newOperationId']

  console.log(newOperationId)

  const client = new cosmos.CosmosClient(
    'AccountEndpoint=https://databasetrigger16a562e1.documents.azure.com:443/;AccountKey=pdK18bIRDpTbZAlWp9hdyp5HmtAcHwnoHPHc16puajpJDyWSB10ySv0n5OVdvU2NCZSpMTHX5GGMvfYOm8BgJw==;'
  )

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId',
    properties: {
      newOperationId: newOperationId,
      oldOperationId: correlationContext!.operation.id
    }
  })

  appInsights.defaultClient.flush()

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

  new azure.authorization.Assignment('databaseContributor', {
    scope: resourceGroupId,
    roleDefinitionName: 'Contributor',
    principalId: process.env.AZURE_PRINCIPAL_ID!
  })

  const sqlAccount = cosmosdb.Account.get(
    process.env.ACCOUNTDB_NAME!,
    process.env.ACCOUNTDB_ID!
  )

  const sqlDatabase = cosmosdb.SqlDatabase.get(
    process.env.DATABASE_NAME!,
    process.env.DATABASE_ID!
  )

  const sqlContainer = cosmosdb.SqlContainer.get(
    process.env.CONTAINER_NAME!,
    process.env.CONTAINER_ID!
  )

  const connectionKey = `Cosmos${process.env['ACCOUNTDB_NAME']}ConnectionKey`

  // SQL on change trigger
  sqlAccount.onChange('databaseTrigger', {
    databaseName: sqlDatabase.name,
    collectionName: sqlContainer.name,
    startFromBeginning: true,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      [connectionKey]: `AccountEndpoint=${process.env.ACCOUNTDB_ENDPOINT};AccountKey=${process.env.ACCOUNTDB_PRIMARYKEY};`
    }
  })

  return {
    databaseName: sqlDatabase.name,
    containerName: sqlContainer.name
  }
}

module.exports = getDatabaseResources().then(e => e)

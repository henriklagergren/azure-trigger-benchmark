import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import workload from '../workloads/workload'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'
import { FunctionApp } from './../functionApp'

dotenv.config({ path: './../.env' })

const name = pulumi.getStack()

const runtime = process.env.RUNTIME!.length > 0 ? process.env.RUNTIME! : 'node'
/*
const handler = async (context: any, req: any) => {
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
    'correlationContextHttp'
  );

  appInsights.defaultClient.trackDependency({
    name: 'Custom operationId http',
    dependencyTypeName: 'HTTP',
    resultCode: 200,
    success: true,
    data: correlationContext!.operation.id,
    duration: 10,
    id: req.query.operationId
  });

  appInsights.defaultClient.flush();

  return workload()
}
*/

const getEndpoint = async () => {
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
  const resourceGroupArgs = {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location
  }

  const storageAccount = new azure.storage.Account(`${runtime}sa`, {
    ...resourceGroupArgs,

    accountKind: 'StorageV2',
    accountTier: 'Standard',
    accountReplicationType: 'LRS'
  })

  const runAsPackageContainer = new azure.storage.Container(`${runtime}-c`, {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private'
  })

  var endpoint = new FunctionApp(`${runtime}`, {
    resourceGroup: resourceGroup,
    storageAccount: storageAccount,
    appInsights: insights,
    storageContainer: runAsPackageContainer,
    //path: 'azuretrigger/httpcs/bin/publish',
    version: '~4',
    runtime: runtime
  })

  /*
  // HTTP trigger
  const httpEvent = new azure.appservice.HttpEventSubscription('HttpTrigger', {
    resourceGroup,
    location: process.env.PULUMI_AZURE_LOCATION,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey
    }
  })
  */

  return endpoint
}

const endpoint = getEndpoint().then(endpoint => endpoint)

//functionApp: httpEvent.functionApp.endpoint.apply(e => e.replace("/api/","")

exports.url = endpoint.then(endpoint => endpoint.url)
exports.functionAppName = endpoint.then(endpoint => endpoint.functionAppName)

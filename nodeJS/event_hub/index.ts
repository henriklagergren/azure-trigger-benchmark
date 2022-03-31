import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import workload from '../workloads/workload'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../.env' })

const handler = async (context : any, message : any) => {
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
    'correlationContextEventHub'
  )

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId eventHub',
    properties: {
      newOperationId: message,
      oldOperationId: correlationContext!.operation.id
    }
  })

  return workload()
}

const getEventHubResources = async () => {
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

  const eventHubNamespace = new azure.eventhub.EventHubNamespace("eventHubName", {
    location: resourceGroup.location,
    resourceGroupName: resourceGroup.name,
    sku: "Standard",
    capacity: 1,
    tags: {
        environment: "Production",
    },
});

const eventHub = new azure.eventhub.EventHub("eventHubTrigger", {
    namespaceName: eventHubNamespace.name,
    resourceGroupName: resourceGroup.name,
    partitionCount: 2,
    messageRetention: 1,
});


//Event hub trigger
const eventHubEvent = eventHub.onEvent('eventHubTrigger',{
  location: process.env.PULUMI_AZURE_LOCATION,
  callback: handler,
  appSettings: {
    APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
  }
});

  return {
    eventHubName: eventHub.name,
    eventHubNamespace: eventHubNamespace.name,
    functionApp: eventHubEvent.functionApp.endpoint.apply(e => e.replace("/api/",""))
  }
}

module.exports = getEventHubResources().then(e => e)

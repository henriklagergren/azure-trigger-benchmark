import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import workload from '../workloads/workload'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../.env' })

const handler = async (context: any, message: any) => {
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

<<<<<<< HEAD
  appInsights.defaultClient.trackDependency({
    name: 'Custom operationId serviceBus',
    dependencyTypeName: 'HTTP',
    resultCode: 200,
    success: true,
    data: correlationContext!.operation.id,
    duration: 10,
    id: message.replace("|","").split(".")[0]
  });
=======
  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId serviceBus',
    properties: {
      newOperationId: message.replace('|', '').split('.')[0],
      oldOperationId: correlationContext!.operation.id
    }
  })
>>>>>>> 4e0768e89db7e2ff97beb3e14b32041999792331

  appInsights.defaultClient.flush();

  return workload()
}

const getServiceBusResources = async () => {
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

  const serviceBusNamespace = new azure.servicebus.Namespace(
    'serviceBusNamespace',
    {
      location: resourceGroup.location,
      resourceGroupName: resourceGroup.name,
      sku: 'standard',
      tags: {
        source: 'example'
      }
    }
  )

  const topic = new azure.servicebus.Topic('serviceBusTopic', {
    namespaceId: serviceBusNamespace.id,
    enablePartitioning: true
  })

  const subscription2 = topic.onEvent('serviceBusTrigger', {
    location: process.env.PULUMI_AZURE_LOCATION,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey
    }
  })

  return {
    serviceBusNamespace: serviceBusNamespace.name,
    topicName: topic.name,
    functionApp: subscription2.functionApp.endpoint.apply(e =>
      e.replace('/api/', '')
    )
  }
}

module.exports = getServiceBusResources().then(e => e)

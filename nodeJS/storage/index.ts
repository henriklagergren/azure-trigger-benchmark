/* eslint-disable no-restricted-syntax */
import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import workload from '../workloads/workload'
import * as dotenv from 'dotenv'

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
    'correlationContextStorage'
  )

<<<<<<< HEAD
  const invocationId = context["bindingData"]["metadata"]["operationId"].replace('|', '').split('.')[0];

  appInsights.defaultClient.trackDependency({
    name: 'Custom operationId storage',
    dependencyTypeName: 'HTTP',
    resultCode: 200,
    success: true,
    data: correlationContext!.operation.id,
    duration: 10,
    id: invocationId
  });

  appInsights.defaultClient.flush();
=======
  const operationId = context['bindingData']['metadata']['operationId']
    .replace('|', '')
    .split('.')[0]

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId storage',
    properties: {
      newOperationId: operationId,
      oldOperationId: correlationContext!.operation.id
    }
  })

  appInsights.defaultClient.flush()
>>>>>>> 4e0768e89db7e2ff97beb3e14b32041999792331

  return workload()
}

const getStorageResources = async () => {
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

  const storageAccount = new azure.storage.Account('account', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountTier: 'Standard',
    accountKind: 'StorageV2',
    accountReplicationType: 'LRS'
  })

  const container = new azure.storage.Container('container', {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private'
  })

  const blobEvent = container.onBlobEvent('StorageTrigger', {
    resourceGroup: resourceGroup,
    location: process.env.PULUMI_AZURE_LOCATION,

    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET
    }
  })

  return {
    storageAccountName: storageAccount.name,
    containerName: container.name,
    functionApp: blobEvent.functionApp.endpoint.apply(e =>
      e.replace('/api/', '')
    )
  }
}

module.exports = getStorageResources().then(e => e)

import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import workload from '../workloads/workload'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../.env' })

const handler = async (context : any) => {
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
    'correlationContexteventGrid'
  );

  const operationId = context["bindings"]["message"]["subject"].split('/').pop();

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId',
    properties: {
      newOperationId: operationId,
      oldOperationId: correlationContext!.operation.id
    }
  })

  return workload()
}

const geteventGridResources = async () => {
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

  const storageAccount = new azure.storage.Account("eventgridsa", {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountReplicationType: "LRS",
    accountTier: "Standard",
    accountKind: "StorageV2",
 });

 const container = new azure.storage.Container('container', {
  storageAccountName: storageAccount.name,
  containerAccessType: 'private'
})
 
 azure.eventgrid.events.onGridBlobCreated("eventGridTrigger", {
    storageAccount,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
    },
    callback: handler
 });

  return {
    eventGridStorageAccountName: storageAccount.name,
    eventGridStorageContainerName: container.name
  }
}

module.exports = geteventGridResources().then(e => e)

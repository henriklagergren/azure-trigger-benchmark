import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import workload from '../workloads/workload'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'
import { Context, HttpResponse } from '@pulumi/azure/appservice'

dotenv.config({ path: './../.env' })

const handler = async (context : Context<HttpResponse>) => {
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

  console.log(JSON.stringify(context))

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId http',
    properties: {
      newOperationId: context.req?.headers["operationId"],
      oldOperationId: correlationContext!.operation.id
    }
  })

  return workload()
}

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

  // HTTP trigger
  const httpEvent = new azure.appservice.HttpEventSubscription('HttpTrigger', {
    resourceGroup,
    location: process.env.PULUMI_AZURE_LOCATION,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey
    }
  })

  return {
    url: httpEvent.url,
    functionApp: httpEvent.functionApp.endpoint.apply(e => e.replace("/api/",""))
  }
}

module.exports = getEndpoint().then(e => e)

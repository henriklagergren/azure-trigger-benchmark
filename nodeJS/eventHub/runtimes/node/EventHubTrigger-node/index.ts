import * as appInsights from 'applicationinsights'
import { AzureFunction, Context } from '@azure/functions'

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

const eventHubTrigger: AzureFunction = async function (
  context: Context,
  eventHubMessages: any[]
): Promise<void> {
  context.log(
    `Eventhub trigger function called for message array ${eventHubMessages}`
  )

  eventHubMessages.forEach((message, index) => {
    context.log(`Processed message ${message}`)
  })
}

export default async function contextPropagatingEventHubTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, req)

  return appInsights.wrapWithCorrelationContext(async () => {
    appInsights.defaultClient.trackDependency({
      target: 'http://',
      name: 'Custom operationId eventHub',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: req[0],
      duration: 10
    })

    appInsights.defaultClient.flush()
    return await eventHubTrigger(context, req)
  }, correlationContext)()
}

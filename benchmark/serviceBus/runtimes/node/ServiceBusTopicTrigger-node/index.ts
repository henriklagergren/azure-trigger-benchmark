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
  .setUseDiskRetryCaching(false)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
appInsights.defaultClient.setAutoPopulateAzureProperties(true)
appInsights.start()

const serviceBusTopicTrigger: AzureFunction = async function (
  context: Context,
  mySbMsg: any
): Promise<void> {
  context.log('ServiceBus topic trigger function processed message', mySbMsg)
}

export default async function contextPropagatingServiceBusTopicTrigger (
  context,
  req
) {
  const correlationContext = appInsights.startOperation(context, req)

  return appInsights.wrapWithCorrelationContext(async () => {
    const startTime = Date.now()

    appInsights.defaultClient.trackDependency({
      target: `http://`,
      name: 'Custom operationId serviceBusTopic',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: req.replace('|', '').split('.')[0],
      duration: Date.now() - startTime
    })

    appInsights.defaultClient.flush()
    return await serviceBusTopicTrigger(context, req)
  }, correlationContext)()
}

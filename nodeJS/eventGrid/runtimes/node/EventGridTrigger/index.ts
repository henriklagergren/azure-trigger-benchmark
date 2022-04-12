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

const eventGridTrigger: AzureFunction = async function (
  context: Context,
  eventGridEvent: any
): Promise<void> {}

export default async function contextPropagatingEventGridTrigger (
  context,
  req
) {
  const correlationContext = appInsights.startOperation(
    context,
    'correlationContexteventGrid'
  )
  return appInsights.wrapWithCorrelationContext(async () => {
    const invocationId = context['bindings']['eventGridEvent']['subject']
      .split('/')
      .pop()

    appInsights.defaultClient.trackDependency({
      target: 'http://',
      name: 'Custom operationId eventGrid',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: invocationId,
      duration: 10
    })

    appInsights.defaultClient.flush()
    return await eventGridTrigger(context, req)
  }, correlationContext)()
}

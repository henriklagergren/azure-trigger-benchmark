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

const envInstance = process.env['WEBSITE_INSTANCE_ID']
let count = 0

const queueTrigger: AzureFunction = async function (
  context: Context,
  invocationId: any
): Promise<void> {
  count += 1

  appInsights.defaultClient.trackTrace({
    message: 'Coldstart details',
    properties: {
      iteration_id: count,
      instance_id: envInstance,
      operation_id: invocationId
    }
  })
}

export default async function contextPropagatingQueueTrigger (
  context: Context,
  queueItem: string
) {
  const correlationContext = appInsights.startOperation(
    context,
    'correlationContextQueue'
  )

  return appInsights.wrapWithCorrelationContext(async () => {
    const startTime = Date.now()

    const invocationId = queueItem

    appInsights.defaultClient.trackDependency({
      target: 'http://',
      name: 'Custom operationId queue',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: invocationId,
      duration: Date.now() - startTime
    })

    appInsights.defaultClient.flush()
    return await queueTrigger(context, invocationId)
  }, correlationContext)()
}

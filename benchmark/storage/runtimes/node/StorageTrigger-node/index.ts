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

const storageTrigger: AzureFunction = async function (
  context: Context,
  documents: any[],
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

export default async function contextPropagatingStorageTrigger (context, req) {
  const correlationContext = appInsights.startOperation(
    context,
    'correlationContextStorage'
  )

  return appInsights.wrapWithCorrelationContext(async () => {
    const invocationId = context['bindingData']['metadata']['operationId']
      .replace('|', '')
      .split('.')[0]

    appInsights.defaultClient.trackDependency({
      target: `http://`,
      name: 'Custom operationId storage',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: invocationId,
      duration: 10
    })

    appInsights.defaultClient.flush()

    return await storageTrigger(context, req, invocationId)
  }, correlationContext)()
}

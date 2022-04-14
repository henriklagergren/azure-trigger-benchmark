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

const queueTrigger: AzureFunction = async function (
    context: Context,
  ): Promise<void> {
    context.res = {
      status: 200,
      headers: {
        'content-type': 'text/plain'
      }
    }
  }

  export default async function contextPropagatingQueueTrigger (context: Context, queueItem: string) {
    const correlationContext = appInsights.startOperation(context, "correlationContextQueue")
  
    return appInsights.wrapWithCorrelationContext(async () => {
      const startTime = Date.now()
  
      const invocationId = queueItem;
  
      appInsights.defaultClient.trackDependency({
        target: '',
        name: 'Custom operationId queue',
        dependencyTypeName: 'HTTP',
        resultCode: 200,
        success: true,
        data: invocationId,
        duration: Date.now() - startTime
      })
  
      appInsights.defaultClient.flush()
      return await queueTrigger(context)
    }, correlationContext)()
  }

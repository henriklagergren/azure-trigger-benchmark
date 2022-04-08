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

const blobTrigger: AzureFunction = async function (
  context: Context,
  documents: any[]
): Promise<void> {
  context.res = {
    status: 200,
    headers: {
      'content-type': 'text/plain'
    }
  }
}

export default async function contextPropagatingBlobTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, 'correlationContextStorage')

  return appInsights.wrapWithCorrelationContext(async () => {

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

    appInsights.defaultClient.flush()
    
    return await blobTrigger(context, req)
  }, correlationContext)()
}
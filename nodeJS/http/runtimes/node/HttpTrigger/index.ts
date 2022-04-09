import * as appInsights from 'applicationinsights'
import { AzureFunction, Context, HttpRequest } from '@azure/functions'

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

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  context.res = {
    status: 200,
    headers: {
      'content-type': 'text/plain'
    }
  }
}

export default async function contextPropagatingHttpTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, req)

  return appInsights.wrapWithCorrelationContext(async () => {
    const startTime = Date.now()

    console.log(JSON.stringify(context))

    appInsights.defaultClient.trackDependency({
      name: 'Custom operationId http',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: correlationContext!.operation.id,
      duration: 10,
      id: req.query.operationId
    })

    appInsights.defaultClient.flush()
    return await httpTrigger(context, req)
  }, correlationContext)()
}

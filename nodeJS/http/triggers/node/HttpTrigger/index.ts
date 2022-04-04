import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import * as appInsights from 'applicationinsights'
import workload from './../../../../workloads/workload'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.')
  /*
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
  )

  appInsights.defaultClient.trackDependency({
    name: 'Custom operationId http',
    dependencyTypeName: 'HTTP',
    resultCode: 200,
    success: true,
    data: correlationContext!.operation.id,
    duration: 10,
    id: req.query.operationId
  })
  */

  context.res = workload()
}

export default httpTrigger

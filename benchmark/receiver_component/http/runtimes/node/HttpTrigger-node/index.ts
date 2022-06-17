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

const envInstance = process.env['WEBSITE_INSTANCE_ID']
let count = 0

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
  invocationId: any
): Promise<void> {
  context.log('HTTP trigger function processed a request.')

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
    return await httpTrigger(context, req, correlationContext!.operation.id)
  }, correlationContext)()
}

import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import * as appInsights from 'applicationinsights'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.')
  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

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

  appInsights.defaultClient.trackTrace({
    message: 'Custom operationId http',
    properties: {
      newOperationId: req.query.operationId,
      oldOperationId: correlationContext!.operation.id
    }
  })

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  }
}

export default httpTrigger

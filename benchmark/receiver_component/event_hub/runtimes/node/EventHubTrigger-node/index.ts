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

const envInstance = process.env['WEBSITE_INSTANCE_ID']
let count = 0

const eventHubTrigger: AzureFunction = async function (
  context: Context,
  eventHubMessages: any[],
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

export default async function contextPropagatingEventHubTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, req)

  req.forEach(eventData => {
    return appInsights.wrapWithCorrelationContext(async () => {
      appInsights.defaultClient.trackDependency({
        target: 'http://',
        name: 'Custom operationId eventHub',
        dependencyTypeName: 'HTTP',
        resultCode: 200,
        success: true,
        data: eventData,
        duration: 10
      })

      appInsights.defaultClient.flush()
      return await eventHubTrigger(context, req, eventData)
    }, correlationContext)()
  })
}

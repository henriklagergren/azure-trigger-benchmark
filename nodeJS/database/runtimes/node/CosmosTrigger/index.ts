import * as appInsights from 'applicationinsights'
import { AzureFunction, Context } from '@azure/functions'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../../../../.env' })

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

const cosmosDBTrigger: AzureFunction = async function (
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

export default async function contextPropagatingCosmosTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, req)

  return appInsights.wrapWithCorrelationContext(async () => {
    const startTime = Date.now()

    const result = await cosmosDBTrigger(context, req)

    const invocationId = context['bindings']['documents']['newOperationId']
    appInsights.defaultClient.trackDependency({
      target: `http://${process.env.DATABASE_NAME}`,
      name: 'Custom operationId database',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: correlationContext!.operation.id,
      duration: Date.now() - startTime,
      id: invocationId
    })

    appInsights.defaultClient.flush()
    return result
  }, correlationContext)()
}

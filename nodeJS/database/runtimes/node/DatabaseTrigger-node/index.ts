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

const databaseTrigger: AzureFunction = async function (
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

export default async function contextPropagatingDatabaseTrigger (context, req) {
  const correlationContext = appInsights.startOperation(context, req)

  return appInsights.wrapWithCorrelationContext(async () => {
    const startTime = Date.now()

    const invocationId = context['bindings']['documents'][0]['newOperationId']
    console.log(context['bindings']['documents'][0]['newOperationId'])

    appInsights.defaultClient.trackDependency({
      target: `http://${process.env.DATABASE_NAME}`,
      name: 'Custom operationId database',
      dependencyTypeName: 'HTTP',
      resultCode: 200,
      success: true,
      data: invocationId,
      duration: Date.now() - startTime
    })

    appInsights.defaultClient.flush()
    return await databaseTrigger(context, req)
  }, correlationContext)()
}

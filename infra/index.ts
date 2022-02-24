import * as Storage from '@azure/storage-blob'
import * as StorageQueue from '@azure/storage-queue'
import * as Identity from '@azure/identity'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as appInsights from 'applicationinsights'
import * as automation from '@pulumi/pulumi/automation'
import axios from 'axios'
import * as dotenv from 'dotenv'
import * as cosmos from '@azure/cosmos'

dotenv.config({ path: './../.env' })

type Response = {
  status: number
  headers: {}
  body: string
}

const getHttpFunction = (url: string) =>
  new Promise<Response>(resolve => {
    axios
      .get(url)
      .then(() =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: 'AZURE - HTTP trigger successfully started'
        })
      )
      .catch(e =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Storage trigger benchmark failed to start\n\nError: ${e.message}`
        })
      )
  })

const getStorageFunction = (
  container: any,
  storageAccount: any,
  operationId: any
) =>
  new Promise<Response>(async resolve => {
    let credential = new Identity.EnvironmentCredential()

    const blobServiceClient = new Storage.BlobServiceClient(
      `https://${storageAccount}.blob.core.windows.net`,
      credential
    )

    const containerClient = blobServiceClient.getContainerClient(container)
    const content: string = 'Hello world!'
    const blobName = `${new Date().getTime()}.txt`
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)

    const uploadBlobResponse = await blockBlobClient
      .upload(content, content.length, {
        metadata: {
          operationId
        }
      })
      .then(() =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: 'AZURE - Storage trigger benchmark successfully started'
        })
      )
      .catch(e =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Storage trigger benchmark failed to start\n\nError: ${e.message}`
        })
      )
  })

const getQueueFunction = (queue: any, storageAccount: any, operationId: any) =>
  new Promise<Response>(resolve => {
    let credential = new Identity.EnvironmentCredential()

    const queueServiceClient = new StorageQueue.QueueServiceClient(
      `https://${storageAccount}.queue.core.windows.net`,
      credential
    )

    const queueClient = queueServiceClient.getQueueClient(queue)

    const base64Encode = (str: string) => Buffer.from(str).toString('base64')

    // Send message (operationId) to queue
    queueClient
      .sendMessage(base64Encode(operationId))
      .then(() =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: 'AZURE - Queue trigger benchmark successfully started'
        })
      )
      .catch(e =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Queue trigger benchmark failed to start\n\nError: ${e.message} \n Queue: ${queue}`
        })
      )
  })

const getDatabaseFunction = (
  databaseName: string,
  containerName: string,
  operationId: any
) =>
  new Promise<Response>(async resolve => {
    const endpoint = process.env.ACCOUNTDB_ENDPOINT!
    const key = process.env.ACCOUNTDB_PRIMARYKEY!
    const client = new cosmos.CosmosClient(
      `AccountEndpoint=${endpoint};AccountKey=${key};`
    )

    async function main () {
      const container = client.database(databaseName).container(containerName)

      console.log('Upserting items to database')

      const newItem = {
        newOperationId: operationId,
        isComplete: false
      }

      await container.items
        .create(newItem)
        .then(() =>
          resolve({
            status: 200,
            headers: {
              'content-type': 'text/plain'
            },
            body: `AZURE - Database trigger benchmark successfully started`
          })
        )
        .catch((e: any) =>
          resolve({
            status: 200,
            headers: {
              'content-type': 'text/plain'
            },
            body: `AZURE - Database trigger benchmark failed to start\n\nError: ${e.message}`
          })
        )
    }

    main().catch(error => {
      console.error(error)
    })
  })

const getTimerFunction = (url: string) =>
  new Promise<Response>(resolve => {
    axios
      .post(url, '{"input":"test"}', {
        headers: {
          'x-functions-key': process.env['AZURE_TIMER_MASTERKEY']!,
          'Content-type': 'application/json'
        }
      })
      .then(() =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: 'AZURE - Timer trigger successfully started'
        })
      )
      .catch(e =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Timer trigger failed to start\n\nError: ${e.message}`
        })
      )
  })

const handler = async (context: any, req: any) => {
  // const trace = openTelemetryApi.default;
  // Setup application insights

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

  // Start an AI Correlation Context using the provided Function context

  // Get URL params
  const triggerType: string = req.query && req.query.trigger
  const validTrigger: string | boolean =
    triggerType &&
    (triggerType === 'http' ||
      triggerType === 'storage' ||
      triggerType === 'queue' ||
      triggerType === 'database' ||
      triggerType === 'timer')
  const triggerInput: string = req.query && req.query.input

  if (validTrigger && triggerInput) {
    const correlationContext: any = appInsights.startOperation(context, req)

    if (triggerType === 'http') {
      // HTTP trigger
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now() // Start trackRequest timer

        const response = await getHttpFunction(triggerInput)

        // Track dependency on completion
        appInsights.defaultClient.trackDependency({
          name: 'CompletionTrackHttp',
          dependencyTypeName: 'HTTP',
          resultCode: response.status,
          success: true,
          data: req.query.input,
          duration: Date.now() - startTime,
          id: correlationContext.operation.parentId
        })
        appInsights.defaultClient.flush()

        return response
      }, correlationContext)()
    }

    if (triggerType === 'queue') {
      const queueInputs = triggerInput.split(',')
      // Queue trigger
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now() // Start trackRequest timer
        const response = await getQueueFunction(
          queueInputs[0],
          queueInputs[1],
          correlationContext.operation.id
        )
        // Track dependency on completion
        appInsights.defaultClient.trackDependency({
          name: 'CompletionTrackQueue',
          dependencyTypeName: 'HTTP',
          resultCode: response.status,
          success: true,
          duration: Date.now() - startTime,
          id: correlationContext.operation.parentId,
          data: ''
        })
        appInsights.defaultClient.flush()
        return response
      }, correlationContext)()
    }
    if (triggerType === 'storage') {
      const storageInputs = triggerInput.split(',')
      // Storage trigger
      if (storageInputs.length === 2) {
        return appInsights.wrapWithCorrelationContext(async () => {
          const startTime = Date.now() // Start trackRequest timer
          const response = await getStorageFunction(
            storageInputs[0],
            storageInputs[1],
            correlationContext.operation.parentId
          )
          // Track dependency on completion
          appInsights.defaultClient.trackDependency({
            name: 'CompletionTrackStorage',
            dependencyTypeName: 'HTTP',
            resultCode: response.status,
            success: true,
            duration: Date.now() - startTime,
            id: correlationContext.operation.parentId,
            data: ''
          })
          appInsights.defaultClient.flush()
          return response
        }, correlationContext)()
      }
    }
    // Database (SQL) trigger
    if (triggerType === 'database') {
      const databaseInputs = triggerInput.split(',')
      //console.log('Database trigger started')
      if (databaseInputs.length === 2) {
        return appInsights.wrapWithCorrelationContext(async () => {
          const startTime = Date.now()
          const response = await getDatabaseFunction(
            databaseInputs[0],
            databaseInputs[1],
            correlationContext.operation.id
          )
          // Track dependency on completion
          appInsights.defaultClient.trackDependency({
            name: 'CompletionTrackDatabase',
            dependencyTypeName: 'HTTP',
            resultCode: response.status,
            success: true,
            duration: Date.now() - startTime,
            id: correlationContext.operation.parentId,
            data: ''
          })
          appInsights.defaultClient.flush()
          return response
        }, correlationContext)()
      }
    }

    if (triggerType == 'timer') {
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now() // Start trackRequest timer
        const response = await getTimerFunction(triggerInput)
        // Track dependency on completion
        appInsights.defaultClient.trackDependency({
          name: 'CompletionTrackStorage',
          dependencyTypeName: 'HTTP',
          resultCode: response.status,
          success: true,
          duration: Date.now() - startTime,
          id: correlationContext.operation.parentId,
          data: ''
        })
        appInsights.defaultClient.flush()
        return response
      }, correlationContext)()
    }
  }
  // If either parameter is missing or is invalid
  return {
    status: 200,
    headers: {
      'content-type': 'text/plain'
    },
    body: JSON.stringify(req)
  }
}

const getEndpoint = async () => {
  const user = await automation.LocalWorkspace.create({}).then(ws =>
    ws.whoAmI().then(i => i.user)
  )
  const shared = new pulumi.StackReference(
    `${user}/${process.env.PULUMI_PROJECT_NAME}/shared`
  )

  const resourceGroupId = shared.requireOutput('resourceGroupId')
  const resourceGroup = azure.core.ResourceGroup.get(
    'ResourceGroup',
    resourceGroupId
  )
  const insightsId = shared.requireOutput('insightsId')
  const insights = azure.appinsights.Insights.get('Insights', insightsId)

  // Infrastructure endpoint (HTTP trigger)
  return new azure.appservice.HttpEventSubscription('InfraEndpoint', {
    resourceGroup,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET,
      ACCOUNTDB_ENDPOINT: process.env.ACCOUNTDB_ENDPOINT,
      ACCOUNTDB_PRIMARYKEY: process.env.ACCOUNTDB_PRIMARYKEY,
      AZURE_TIMER_MASTERKEY: process.env.AZURE_TIMER_MASTERKEY
    }
  })
}

exports.url = getEndpoint().then(endpoint => endpoint.url)

import * as appInsights from 'applicationinsights'
import * as Storage from '@azure/storage-blob'
import * as StorageQueue from '@azure/storage-queue'
import * as Identity from '@azure/identity'
import * as EventHub from '@azure/event-hubs'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import axios from 'axios'
import * as dotenv from 'dotenv'
import * as cosmos from '@azure/cosmos'
import * as serviceBus from '@azure/service-bus'

dotenv.config({ path: './../.env' })

type Response = {
  status: number
  headers: {}
  body: string
}

const getHttpFunction = (url: string, operationId: any) =>
  new Promise<Response>(resolve => {
    axios
      .get(url + '?operationId=' + operationId)
      .then(() =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain',
            operationId: operationId
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
          body: `AZURE - HTTP trigger benchmark failed to start\n\nError: ${e.message}`
        })
      )
  })

const getStorageFunction = (
  container: any,
  storageAccount: any,
  operationId: any,
  appInsights: any,
) =>
  new Promise<Response>(resolve => {
    let credential = new Identity.EnvironmentCredential()

    const blobServiceClient = new Storage.BlobServiceClient(
      `https://${storageAccount}.blob.core.windows.net`,
      credential
    )

    const containerClient = blobServiceClient.getContainerClient(container)
    const content: string = 'Hello world!'
    const blobName = `${new Date().getTime()}.txt`
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)
    
    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
      name: 'CompletionTrackStorage',
      dependencyTypeName: 'HTTP',
      resultCode: "200",
      success: true,
      duration: "10",
      id: operationId,
      data: ''
    })

    blockBlobClient
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

const getQueueFunction = (queue: any, storageAccount: any, operationId: any, appInsights: any) =>
  new Promise<Response>(resolve => {
    let credential = new Identity.EnvironmentCredential()

    const queueServiceClient = new StorageQueue.QueueServiceClient(
      `https://${storageAccount}.queue.core.windows.net`,
      credential
    )

    const queueClient = queueServiceClient.getQueueClient(queue)

    const base64Encode = (str: string) => Buffer.from(str).toString('base64')
    
    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
      name: 'CompletionTrackQueue',
      dependencyTypeName: 'HTTP',
      resultCode: "200",
      success: true,
      duration: "10",
      id: operationId,
      data: ''
    })

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
  operationId: any,
  appInsights: any
) =>
  new Promise<Response>(async resolve => {
    const endpoint = process.env.ACCOUNTDB_ENDPOINT!
    const key = process.env.ACCOUNTDB_PRIMARYKEY!
    const client = new cosmos.CosmosClient(
      `AccountEndpoint=${endpoint};AccountKey=${key};`
    )
    const container = client.database(databaseName).container(containerName)

    console.log('Insert item to database')

    const newItem = {
      newOperationId: operationId,
      isComplete: false
    }

    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
    name: 'CompletionTrackDatabase',
    dependencyTypeName: 'HTTP',
    resultCode: "200",
    success: true,
    duration: "10",
    id: operationId,
    data: ''
    })

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
  })

const getTimerFunction = (url: string, operationId: any, appInsights: any) =>
  new Promise<Response>(resolve => {
    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
      name: 'CompletionTrackTimer',
      dependencyTypeName: 'HTTP',
      resultCode: "200",
      success: true,
      duration: "10",
      id: operationId,
      data: ''
    })
    axios
      .post(
        url,
        { input: operationId },
        {
          headers: {
            'x-functions-key': process.env['AZURE_TIMER_MASTERKEY']!,
            'Content-type': 'application/json'
          }
        }
      )
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

const getServiceBusResources = (
  serviceBusName: string,
  topicName: string,
  operationId: string,
  appInsights: any
) =>
  new Promise<Response>(async resolve => {
    let credential = new Identity.EnvironmentCredential()

    const client = new serviceBus.ServiceBusClient(
      `${serviceBusName}.servicebus.windows.net`,
      credential
    )

    const message = { body: operationId };
    const sender = client.createSender(topicName);
    let batch = await sender.createMessageBatch();
    batch.tryAddMessage(message);
      
    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
      name: 'CompletionTrackserviceBusTopic',
      dependencyTypeName: 'HTTP',
      resultCode: "200",
      success: true,
      data: "",
      duration: "10",
      id: operationId
    })

      await sender
        .sendMessages(batch)
        .then(() =>
          resolve({
            status: 200,
            headers: {
              'content-type': 'text/plain'
            },
            body: 'AZURE - Service Bus trigger successfully started'
          })
        )
        .catch(e =>
          resolve({
            status: 200,
            headers: {
              'content-type': 'text/plain'
            },
            body: `AZURE - Service Bus trigger failed to start\n\nError: ${e.message}`
          })
        )

      console.log(`Sent a batch of messages to the topic: ${topicName}`)

      // Close the sender
      await sender.close()
      await client.close()
  })

const getEventHubFunction = (
  eventHubName: string,
  eventHubNamespace: string,
  operationId: string,
  appInsights: any
) =>
  new Promise<Response>(async resolve => {
    const producer = new EventHub.EventHubProducerClient(
      eventHubNamespace + '.servicebus.windows.net',
      eventHubName,
      new Identity.EnvironmentCredential()
    )

    const batch = await producer.createBatch()

    batch.tryAdd({ body: operationId })
           // Track dependency on completion
           appInsights.defaultClient.trackDependency({
            name: 'CompletionTrackEventHub',
            dependencyTypeName: 'HTTP',
            resultCode: "200",
            success: true,
            duration: "10",
            id: operationId,
            data: ''
          })

    producer
      .sendBatch(batch)
      .then(async () => {
        await producer.close()
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: 'AZURE - Event Hub trigger benchmark successfully started'
        })
      })
      .catch(async e => {
        await producer.close()
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Event Hub trigger benchmark failed to start\n\nError in sending batch: ${e.message} \n`
        })
      })
  })

const getEventGridFunction = (
  storageAccountName: string,
  storageContainerName: string,
  operationId: any,
  appInsights: any
) =>
  new Promise<Response>(async resolve => {
    let credential = new Identity.EnvironmentCredential()

    const blobServiceClient = new Storage.BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net`,
      credential
    )

    const containerClient = blobServiceClient.getContainerClient(
      storageContainerName
    )
    const content: string = 'Hello world!'
    const blobName = operationId
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)
    
    // Track dependency on completion
    appInsights.defaultClient.trackDependency({
      name: 'CompletionTrackEventGrid',
      dependencyTypeName: 'HTTP',
      resultCode: "200",
      success: true,
      duration: "10",
      id: operationId,
      data: ''
    })

    blockBlobClient
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
          body: 'AZURE - Event Grid trigger successfully started'
        })
      )
      .catch(e =>
        resolve({
          status: 200,
          headers: {
            'content-type': 'text/plain'
          },
          body: `AZURE - Event Grid trigger failed to start\n\nError: ${e.message}`
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
      triggerType === 'timer' ||
      triggerType === 'eventHub' ||
      triggerType === 'eventGrid' ||
      triggerType === 'serviceBusTopic')
  const triggerInput: string = req.query && req.query.input

  if (validTrigger && triggerInput) {
    const correlationContext: any = appInsights.startOperation(context, req)

    appInsights.defaultClient.trackTrace({
      message: 'InvokerEndpoint details',
      properties: {
        iterationId: req.query.id,
        invokeMode: req.query.invokeMode,
        invokeInput: req.query.invokeInput,
        triggerType: triggerType,
        runtime: process.env.RUNTIME,
        operationId: correlationContext.operation.id
      }
    })

    if (triggerType === 'http') {
      // HTTP trigger
      return appInsights.wrapWithCorrelationContext(async () => {
        const response = await getHttpFunction(
          triggerInput,
          correlationContext.operation.id
        )

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
          correlationContext.operation.id,
          appInsights
        )

        
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
            correlationContext.operation.parentId,
            appInsights
          )
          
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
            correlationContext.operation.id,
            appInsights
          )

          appInsights.defaultClient.flush()
          return response
        }, correlationContext)()
      }
    }

    if (triggerType == 'timer') {
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now() // Start trackRequest timer
        const response = await getTimerFunction(
          triggerInput,
          correlationContext.operation.parentId,
          appInsights
        )

        appInsights.defaultClient.flush()
        return response
      }, correlationContext)()
    }
    if (triggerType === 'serviceBusTopic') {
      const serviceBusInputs = triggerInput.split(',')
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now() // Start trackRequest timer
        const response = await getServiceBusResources(
          serviceBusInputs[0],
          serviceBusInputs[1],
          correlationContext.operation.parentId,
          appInsights
        )

        appInsights.defaultClient.flush()

        return response
      }, correlationContext)()
    }

    if (triggerType == 'eventHub') {
      const eventHubInputs = triggerInput.split(',')
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now()
        const response = await getEventHubFunction(
          eventHubInputs[0],
          eventHubInputs[1],
          correlationContext.operation.id,
          appInsights
        )

        appInsights.defaultClient.flush()
        return response
      }, correlationContext)()
    }

    if (triggerType == 'eventGrid') {
      const eventGridInputs = triggerInput.split(',')
      return appInsights.wrapWithCorrelationContext(async () => {
        const startTime = Date.now()
        const response = await getEventGridFunction(
          eventGridInputs[0],
          eventGridInputs[1],
          correlationContext.operation.id,
          appInsights
        )

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
  return new azure.appservice.HttpEventSubscription('InvokerEndpoint', {
    resourceGroup,
    location: process.env.PULUMI_AZURE_LOCATION,
    callback: handler,
    appSettings: {
      //APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      APPLICATIONINSIGHTS_CONNECTION_STRING: insights.connectionString,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET,
      ACCOUNTDB_ENDPOINT: process.env.ACCOUNTDB_ENDPOINT,
      ACCOUNTDB_PRIMARYKEY: process.env.ACCOUNTDB_PRIMARYKEY,
      AZURE_TIMER_MASTERKEY: process.env.AZURE_TIMER_MASTERKEY,
      RUNTIME: process.env.RUNTIME
    }
  })
}

exports.url = getEndpoint().then(endpoint => endpoint.url)

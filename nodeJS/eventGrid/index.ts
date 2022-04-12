import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../.env' })

const geteventGridResources = async () => {
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

  const storageAccount = new azure.storage.Account('eventgridsa', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountReplicationType: 'LRS',
    accountTier: 'Standard',
    accountKind: 'StorageV2'
  })

  const container = new azure.storage.Container('container', {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private'
  })

  const systemTopic = new azure.eventgrid.SystemTopic('EventGridTopic', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    sourceArmResourceId: storageAccount.id,
    topicType: 'Microsoft.Storage.StorageAccounts'
  })

  var functionId = ''
  if (process.env.RUNTIME == 'node') {
    functionId = `${process.env.FUNCTIONAPP_ID}/functions/EventGridTrigger`
  } else if (process.env.RUNTIME == 'dotnet') {
    functionId = `${process.env.FUNCTIONAPP_ID}/functions/EventGridTrigger-cs`
  }

  const subscription = new azure.eventgrid.SystemTopicEventSubscription(
    'eventGridSubscr',
    {
      resourceGroupName: resourceGroup.name,
      systemTopic: systemTopic.name,
      azureFunctionEndpoint: {
        functionId: functionId,
        maxEventsPerBatch: 1
      },
      name: 'eventGridSubscr',
      includedEventTypes: ['Microsoft.Storage.BlobCreated']
    }
  )

  return {
    eventGridStorageAccountName: storageAccount.name,
    eventGridStorageContainerName: container.name
  }
}

module.exports = geteventGridResources().then(e => e)

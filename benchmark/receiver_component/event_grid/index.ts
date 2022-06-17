import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../../.env' })

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

  const storageAccount = new azure.storage.Account('eventgridsa', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountReplicationType: 'LRS',
    accountTier: 'Standard',
    accountKind: 'StorageV2'
  })

  const systemTopic = new azure.eventgrid.SystemTopic('EventGridTopic', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    sourceArmResourceId: storageAccount.id,
    topicType: 'Microsoft.Storage.StorageAccounts'
  })

  const container = new azure.storage.Container('container', {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private'
  })

  const subscription = new azure.eventgrid.SystemTopicEventSubscription(
    'eventGridSubscr',
    {
      resourceGroupName: resourceGroup.name,
      systemTopic: systemTopic.name.apply(name => name),
      azureFunctionEndpoint: {
        functionId: `${process.env.FUNCTIONAPP_ID}/functions/EventGridTrigger-${process.env.RUNTIME}`,
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

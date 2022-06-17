import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../../.env' })

const getServiceBusResources = async () => {
  // Import shared resources
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

  const serviceBusNamespace = new azure.servicebus.Namespace(
    'serviceBusNamespace',
    {
      location: resourceGroup.location,
      resourceGroupName: resourceGroup.name,
      sku: 'standard',
      tags: {
        source: 'example'
      }
    }
  )

  const topic = new azure.servicebus.Topic('serviceBusTopic', {
    namespaceId: serviceBusNamespace.id,
    enablePartitioning: true
  })

  const topicSubscription = new azure.servicebus.Subscription(
    'serviceBusTopicSub',
    {
      name: 'serviceBusTopicSub',
      topicId: topic.id,
      maxDeliveryCount: 1
    }
  )

  return {
    serviceBusNamespace: serviceBusNamespace.name,
    serviceBusNamespaceConnection: pulumi.unsecret(
      serviceBusNamespace.defaultPrimaryConnectionString
    ),
    topicName: topic.name,
    topicSubscriptionName: topicSubscription.name
  }
}

module.exports = getServiceBusResources().then(e => e)

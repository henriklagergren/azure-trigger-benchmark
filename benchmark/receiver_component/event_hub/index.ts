import * as appInsights from 'applicationinsights'
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../../.env' })

const getEventHubResources = async () => {
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

  const eventHubNamespace = new azure.eventhub.EventHubNamespace(
    'eventHubName',
    {
      location: resourceGroup.location,
      resourceGroupName: resourceGroup.name,
      sku: 'Standard',
      capacity: 1,
      tags: {
        environment: 'Production'
      }
    }
  )

  const eventHub = new azure.eventhub.EventHub('eventHubTrigger', {
    namespaceName: eventHubNamespace.name,
    resourceGroupName: resourceGroup.name,
    partitionCount: 2,
    messageRetention: 1
  })

  return {
    eventHubName: eventHub.name,
    eventHubNamespace: eventHubNamespace.name,
    eventHubConnectionString: pulumi.unsecret(
      eventHubNamespace.defaultPrimaryConnectionString
    )
  }
}

module.exports = getEventHubResources().then(e => e)

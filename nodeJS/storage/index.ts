/* eslint-disable no-restricted-syntax */
import * as azure from '@pulumi/azure'
import * as pulumi from '@pulumi/pulumi'
import * as automation from '@pulumi/pulumi/automation'
import * as dotenv from 'dotenv'

dotenv.config({ path: './../.env' })

const getStorageResources = async () => {
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

  const storageAccount = new azure.storage.Account('account', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountTier: 'Standard',
    accountKind: 'StorageV2',
    accountReplicationType: 'LRS'
  })

  const container = new azure.storage.Container('container', {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private'
  })

  /*const blobEvent = container.onBlobEvent('StorageTrigger', {
    resourceGroup: resourceGroup,
    location: process.env.PULUMI_AZURE_LOCATION,

    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET
    }
  })*/
  

  return {
    storageAccountName: storageAccount.name,
    containerName: container.name,
    storageConnectionString: pulumi.unsecret(storageAccount.primaryConnectionString)
  }
}

module.exports = getStorageResources().then(e => e)

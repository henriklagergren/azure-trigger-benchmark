/* eslint-disable no-restricted-syntax */
import * as appInsights from 'applicationinsights';
import * as Storage from '@azure/storage-blob';
import * as Identity from '@azure/identity';
import * as azure from '@pulumi/azure';
import * as pulumi from '@pulumi/pulumi';
import * as automation from '@pulumi/pulumi/automation';
import workload from '../workloads/workload';
import * as dotenv from 'dotenv';
import { RoleDefinition } from '@pulumi/azure/authorization';

dotenv.config({ path: './../.env',});

const handler = async (context : any, trigger : any) => {
  // Setup application insights
  appInsights.setup()
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(false)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C);
  appInsights.defaultClient.setAutoPopulateAzureProperties(true);
  appInsights.start();

  const correlationContext = appInsights.startOperation(context, 'correlationContextStorage');

  let credential = new Identity.EnvironmentCredential();

  // Get correct operationID from blob metadata
  const blobUrl = trigger.data.url;
  const props = blobUrl.split('/').filter((w : string) => w.length > 6);
  const storageAccount = props[0].split('.')[0];
  const container = props[1];
  const blob = props[2];

  const blobServiceClient = new Storage.BlobServiceClient(
    `https://${storageAccount}.blob.core.windows.net`,
    credential,
  );

  const containerClient = blobServiceClient.getContainerClient(container);
  const blobs = containerClient.listBlobsFlat({ includeMetadata: true });

  for await (const item of blobs) {
    if (item.name === blob && item.metadata != undefined && correlationContext != null) {
      appInsights.defaultClient.trackTrace({
        message: 'Custom operationId',
        properties: {
          newOperationId: item.metadata.operationid,
          oldOperationId: correlationContext.operation.id,
        },
      });
    }
  }
  appInsights.defaultClient.flush();

  return workload(20);
};

const getStorageResources = async () => {
  // Import shared resources
  const user = await automation.LocalWorkspace.create({})
    .then((ws) => ws.whoAmI()
      .then((i) => i.user));
  const shared = new pulumi.StackReference(`${user}/${process.env.PULUMI_PROJECT_NAME}/shared`);

  const resourceGroupId = shared.requireOutput('resourceGroupId');
  const resourceGroup = azure.core.ResourceGroup.get('ResourceGroup', resourceGroupId);
  const insightsId = shared.requireOutput('insightsId');
  const insights = azure.appinsights.Insights.get('Insights', insightsId);

  
  const primary = azure.core.getSubscription({});
  const exampleClientConf = azure.core.getClientConfig({});
  const exampleAssign = new azure.authorization.Assignment("exampleAssign", {
    name: process.env.AZURE_CLIENT_ID,
    scope: primary.then(primary => `${primary.id}/resourceGroups/resourcegroupe2d9932a/`),
    roleDefinitionName: "Storage Blob Data Contributor",
    principalId: exampleClientConf.then(exampleClientConf => exampleClientConf.objectId),
  })

  const storageAccount = new azure.storage.Account('account', {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    accountTier: 'Standard',
    accountKind: 'StorageV2',
    accountReplicationType: 'LRS',
  });

  const container = new azure.storage.Container('container', {
    storageAccountName: storageAccount.name,
    containerAccessType: 'private',
  });

  // Blob trigger
  azure.eventgrid.events.onGridBlobCreated('StorageTrigger', {
    resourceGroup,
    storageAccount,
    callback: handler,
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET
    },
  });

  return { storageAccountName: storageAccount.name, containerName: container.name };
};

module.exports = getStorageResources().then((e) => e);

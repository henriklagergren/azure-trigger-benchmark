import * as azure from '@pulumi/azure';
import * as azuread from "@pulumi/azuread";

const resourceGroup = new azure.core.ResourceGroup('ResourceGroup', {
  location: "northeurope"
});

const insights = new azure.appinsights.Insights('Insights', {
  location: resourceGroup.location,
  resourceGroupName: resourceGroup.name,
  applicationType: 'Node.JS',
});

const current = azuread.getClientConfig({});
const application = new azuread.Application("application", {
    displayName: "azure-triggers-study",
    owners: [current.then((current: { objectId: any; }) => current.objectId)],
});
const servicePrincipal = new azuread.ServicePrincipal("servicePrincipal", {
    applicationId: application.applicationId,
    appRoleAssignmentRequired: false,
    owners: [current.then((current: { objectId: any; }) => current.objectId)],
});

const clientSecret = new azuread.ApplicationPassword('exampleClientSecret', {
  applicationObjectId: application.objectId,
  displayName: "azure-triggers-study-secret",
  endDateRelative: "3600h"
})

const fs = require('fs');

if (fs.existsSync('../.env')) {
  fs.unlinkSync('../.env')
}

servicePrincipal.applicationTenantId.apply(applicationTenantId => fs.writeFile('../.env', 'AZURE_TENANT_ID="' + applicationTenantId + '"\n', {'flag': 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Tenant ID not added') 
    throw err;
  } 
  console.log("Tenant ID - Added")
}))

servicePrincipal.objectId.apply(objectId => fs.writeFile('../.env', 'AZURE_PRINCIPAL_ID="' + objectId + '"\n', {'flag': 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Principal ID not added') 
    throw err;
  } 
  console.log("Tenant ID - Added")
}))

application.applicationId.apply(id => fs.writeFile('../.env', 'AZURE_CLIENT_ID="' + id + '"\n', {'flag': 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Client ID not added') 
    throw err;
  } 
  console.log("Client ID - Added")
}))

clientSecret.value.apply(value => fs.writeFile('../.env', 'AZURE_CLIENT_SECRET="' + value + '"\n', {'flag' : 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Client Secret not added') 
    throw err;
  } 
  console.log("Client Secret - Added")
}))

application.objectId.apply(objectId => fs.writeFile('../.env', 'AZURE_OBJECT_ID="' + objectId + '"\n', {'flag' : 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Object ID not added') 
    throw err;
  } 
  console.log("Object ID - Added")
}))

fs.writeFile('../.env', 'PULUMI_PROJECT_NAME="azure-triggers-study" \nPULUMI_AZURE_LOCATION="northeurope" \n', {'flag': 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: PULUMI variables not added') 
    throw err;
  } 
  console.log("PULUMI variables - Added")
})

  // Export ids and names of resources to import them in other projects
exports.resourceGroupId = resourceGroup.id;
exports.resourceGroupName = resourceGroup.name;
exports.insightsId = insights.id;
exports.insightsName = insights.name;
exports.insightsAppId = insights.appId; // Required by Azure Insights REST API
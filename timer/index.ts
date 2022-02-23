import * as appInsights from 'applicationinsights';
import * as azure from '@pulumi/azure';
import * as pulumi from '@pulumi/pulumi';
import workload from '../workloads/workload';
import * as automation from '@pulumi/pulumi/automation';
import * as dotenv from 'dotenv';

dotenv.config({ path: './../.env',});


const handler = async () => {
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

  return workload();
};

const getEndpoint = async () => {

  const user = await automation.LocalWorkspace.create({})
    .then((ws) => ws.whoAmI()
      .then((i) => i.user));
  const shared = new pulumi.StackReference(`${user}/${process.env.PULUMI_PROJECT_NAME}/shared`);

  const resourceGroupId = shared.requireOutput('resourceGroupId');
  const resourceGroup = azure.core.ResourceGroup.get('ResourceGroup', resourceGroupId);
  const insightsId = shared.requireOutput('insightsId');
  const insights = azure.appinsights.Insights.get('Insights', insightsId);

  // HTTP trigger
  const timer = new azure.appservice.TimerFunction("timerTrigger", {
    schedule: {month: 11},
    runOnStartup: false,
    callback: handler
  });

  const app = new azure.appservice.MultiCallbackFunctionApp("timerApp", {
    resourceGroupName: resourceGroup.name,
    functions: [timer],
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: insights.instrumentationKey,
    },
});

const fs = require('fs');

app.functionApp.getHostKeys().masterKey.apply(masterKey => fs.writeFile('../.env', 'AZURE_TIMER_MASTERKEY="' + masterKey + '"\n', {'flag': 'a'}, (err:any) => {
  if (err){
    console.log('ERROR: Master Key not added') 
    throw err;
  } 
  console.log("Master Key - Added")
}));


  return {timerFunctionAppName: app.functionApp.defaultHostname,
          timerTriggerAppName : timer.name}
};

module.exports = getEndpoint().then((e) => e);
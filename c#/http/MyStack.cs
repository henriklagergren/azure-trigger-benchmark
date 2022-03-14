using Pulumi;
using Azure = Pulumi.Azure;
using Pulumi.Automation;
using System;
using System.Threading.Tasks;
using System.IO;
using DotNetEnv;

class HttpStack : Stack
{
  public HttpStack()
  {
    DotNetEnv.Env.Load("../.env");

    async Task<Azure.AppService.FunctionApp> getEndpoint()
    {


      string project_name = Environment.GetEnvironmentVariable("PULUMI_PROJECT_NAME");

      string location = Environment.GetEnvironmentVariable("PULUMI_AZURE_LOCATION");

      var program = Pulumi.Automation.PulumiFn.Create(() =>
      {
      });

      var ws = await Pulumi.Automation.LocalWorkspace.CreateOrSelectStackAsync(new InlineProgramArgs(project_name, "trigger", program)
      );

      var user = await ws.Workspace.WhoAmIAsync();

      var shared = new Pulumi.StackReference($"{user.User}/{project_name}/shared");

      var resourceGroupId = (string)await shared.RequireValueAsync("ResourceGroupId");

      var resourceGroup = Azure.Core.ResourceGroup.Get("ResourceGroup", resourceGroupId);

      var insightsId = (string)await shared.RequireValueAsync("InsightsId");
      var insights = Azure.AppInsights.Insights.Get("Insights", insightsId);

      var appServicePlan = new Azure.AppService.Plan("httptrigger", new Azure.AppService.PlanArgs
      {
        Location = location,
        ResourceGroupName = resourceGroup.Name,
        Sku = new Azure.AppService.Inputs.PlanSkuArgs
        {
          Tier = "Standard",
          Size = "S1",
        },
      });

      var storageAccount = new Azure.Storage.Account("httptrigger", new Azure.Storage.AccountArgs
      {
        ResourceGroupName = resourceGroup.Name,
        Location = resourceGroup.Location,
        AccountTier = "Standard",
        AccountReplicationType = "GRS"
      });

      return new Azure.AppService.FunctionApp("httptrigger", new Azure.AppService.FunctionAppArgs
      {
        ResourceGroupName = resourceGroup.Name,
        Location = location,
        AppServicePlanId = appServicePlan.Id,
        StorageConnectionString = storageAccount.PrimaryConnectionString,
        AppSettings = new InputMap<string> {
                {"APPINSIGHTS_INSTRUMENTATIONKEY", insights.InstrumentationKey}
              }
      });

    }

    this.Endpoint = Output.Create(getEndpoint()).Apply(endPoint => endPoint.DefaultHostname);
  }

  [Output] public Output<string> Endpoint { get; set; }


}

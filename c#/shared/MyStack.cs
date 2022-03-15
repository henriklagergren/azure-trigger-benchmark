using Pulumi;
using Azure = Pulumi.Azure;
using AzureRead = Pulumi.AzureAD;
using System.IO;
using System;

class MyStack : Stack
{
  public MyStack()
  {
    // Add your resources here
    var resourceGroup = new Azure.Core.ResourceGroup("ResourceGroup", new Azure.Core.ResourceGroupArgs
    {
      Location = "northEurope"
    });

    var insights = new Azure.AppInsights.Insights("Insights", new Azure.AppInsights.InsightsArgs
    {
      Location = resourceGroup.Location,
      ResourceGroupName = resourceGroup.Name,
      ApplicationType = "Node.JS"
    });


    var readTelemetry = new Azure.AppInsights.ApiKey("readTelemetry", new Azure.AppInsights.ApiKeyArgs
    {
      ApplicationInsightsId = insights.Id,
      ReadPermissions = { "aggregate", "api", "draft", "extendqueries", "search" }
    });

    var current = Output.Create(AzureRead.GetClientConfig.InvokeAsync());

    var application = new AzureRead.Application("application", new AzureRead.ApplicationArgs
    {
      DisplayName = "azure-triggers-study",
      Owners = current.Apply(current => current.ObjectId)
    });

    var servicePrincipal = new AzureRead.ServicePrincipal("servicePrincipal", new AzureRead.ServicePrincipalArgs
    {
      ApplicationId = application.ApplicationId,
      AppRoleAssignmentRequired = false,
      Owners = current.Apply(current => current.ObjectId)
    });

    var clientSecret = new AzureRead.ApplicationPassword("exampleClientSecret", new AzureRead.ApplicationPasswordArgs
    {
      ApplicationObjectId = application.ObjectId,
      DisplayName = "azure-triggers-study-secret",
      EndDateRelative = "3600h"
    });

    var sqlAccount = new Azure.CosmosDB.Account("databaseTrigger", new Azure.CosmosDB.AccountArgs
    {
      ResourceGroupName = resourceGroup.Name,
      OfferType = "Standard",
      ConsistencyPolicy = new Azure.CosmosDB.Inputs.AccountConsistencyPolicyArgs
      {
        ConsistencyLevel = "Session"
      },
      GeoLocations = new Azure.CosmosDB.Inputs.AccountGeoLocationArgs
      {
        Location = resourceGroup.Location,
        FailoverPriority = 0
      },
      EnableFreeTier = true
    });

    var sqlDatabase = new Azure.CosmosDB.SqlDatabase("sqlDatabase", new Azure.CosmosDB.SqlDatabaseArgs
    {
      AccountName = sqlAccount.Name,
      ResourceGroupName = resourceGroup.Name,
      Throughput = 400
    });

    var sqlContainer = new Azure.CosmosDB.SqlContainer("sqlContainer", new Azure.CosmosDB.SqlContainerArgs
    {
      DatabaseName = sqlDatabase.Name,
      AccountName = sqlAccount.Name,
      ResourceGroupName = resourceGroup.Name,
      PartitionKeyPath = "/newOperationId"
    });

    new Azure.Authorization.Assignment("storageBlobDataContributor", new Azure.Authorization.AssignmentArgs
    {
      Scope = resourceGroup.Id,
      RoleDefinitionName = "Storage Blob Data Contributor",
      PrincipalId = servicePrincipal.ObjectId
    });

    new Azure.Authorization.Assignment("storageQueueDataContributor", new Azure.Authorization.AssignmentArgs
    {
      Scope = resourceGroup.Id,
      RoleDefinitionName = "Storage Queue Data Contributor",
      PrincipalId = servicePrincipal.ObjectId
    });

    new Azure.Authorization.Assignment("eventHubDataOwner", new Azure.Authorization.AssignmentArgs
    {
      Scope = resourceGroup.Id,
      RoleDefinitionName = "Azure Event Hubs Data Owner",
      PrincipalId = servicePrincipal.ObjectId
    });

    new Azure.Authorization.Assignment("timerOwner", new Azure.Authorization.AssignmentArgs
    {
      Scope = resourceGroup.Id,
      RoleDefinitionName = "Owner",
      PrincipalId = servicePrincipal.ObjectId
    });

    new Azure.Authorization.Assignment("serviceBusOwner", new Azure.Authorization.AssignmentArgs
    {
      Scope = resourceGroup.Id,
      RoleDefinitionName = "Azure Service Bus Data Owner",
      PrincipalId = servicePrincipal.ObjectId
    });

    void writeEnv()
    {
      string path = @"../.env";

      using (StreamWriter write = new StreamWriter(path, true))
      {
        write.WriteLine("PULUMI_PROJECT_NAME=\"azure-triggers-study\"\nPULUMI_AZURE_LOCATION=\"northeurope\" \n");
      }

      sqlAccount.Name.Apply<string>(name =>
      {
        using (StreamWriter write = new StreamWriter(path, true))
        {
          write.WriteLine("ACCOUNTDB_NAME=\"" + name + "\"\n");
        }
        return "Account name added to .env";
      });




      //sqlAccount.Name.Apply(name => sr.WriteLineAsync("HEJ"));
      //sr.WriteLineAsync("ACCOUNTDB_NAME=\"" + name + "\"\n")
    }



    writeEnv();

    // Export ids and names of resources to import them in other projects

    this.ResourceGroupId = resourceGroup.Id;
    this.ResourceGroupName = resourceGroup.Name;
    this.InsightsId = insights.Id;
    this.InsightsName = insights.Name;
    this.InsightsAppId = insights.AppId;
    this.AccountName = sqlAccount.Name;

    // Required by Azure Insights REST API

  }

  [Output] public Output<string> AccountName { get; set; }
  [Output] public Output<string> ResourceGroupId { get; set; }
  [Output] public Output<string> ResourceGroupName { get; set; }
  [Output] public Output<string> InsightsId { get; set; }
  [Output] public Output<string> InsightsName { get; set; }
  [Output] public Output<string> InsightsAppId { get; set; }
}






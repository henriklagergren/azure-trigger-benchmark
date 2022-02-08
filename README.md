# Azure Triggers Study

## Intructions to reproduce experiment:

1. Install Pulumi on your device (if not already installed) and azure SDK. Login in by type "pulumi login" and "az login" in terminal.
2. Clone this repository and open it up.
3. Create a .env-file in the root of the repository and fill it with following data (can be found in azure-portal): 
  - PULUMI_PROJECT_NAME = "azure-triggers-study"
  - PULUMI_AZURE_CLIENT_SECRET = ""
  - PULUMI_AZURE_CLIENT_ID = ""
  - PULUMI_AZURE_SUBSCRIPTION_ID = ""
  - PULUMI_AZURE_TENANT_ID = ""
  - PULUMI_AZURE_LOCATION = ""
4. Run the shell-file "init.sh" to install all packages in the relevant folders.
5. Run the shell-file "deploy.sh" with a flag to create all necessary resources in azure.

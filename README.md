# Azure Triggers Study

## Intructions to reproduce experiment:

1. Go to Pulumi and create a new project called "azure-triggers-study". The first stack should be named "shared" and location "northeurope".
2. Install Pulumi on your device (if not already installed) and azure SDK. Login in by type "pulumi login" and "az login" in terminal.
3. Clone this repository and open it up.
4. Create a .env-file in the root of the repository and fill it with following data (can be found in azure-portal): 
  - PULUMI_PROJECT_NAME = "azure-triggers-study"
  - PULUMI_AZURE_CLIENT_SECRET = ""
  - PULUMI_AZURE_CLIENT_ID = ""
  - PULUMI_AZURE_SUBSCRIPTION_ID = ""
  - PULUMI_AZURE_TENANT_ID = ""
  - PULUMI_AZURE_LOCATION = ""
5. Go to "shared" folder and create two new stacks named (with "pulumi stack select" command):
  - trigger
  - infra
6. Run "npm install" in ./shared, ./infra and ./http folder.
7. Go to root and run the deploy-shell script.

# Azure Triggers Study

#### This is an ongoing master thesis at Chalmers University of Technology, in cooperation with Microsoft. 
Finish date expected in May 2022.

## Intructions to reproduce experiment:

1. Install Pulumi on your device (if not already installed) and azure SDK. Login in by type "pulumi login" and "az login" in terminal.
2. Clone this repository and open it up.
4. Run the shell-file "init.sh" to install all packages in the relevant folders.
5. Run the shell-file "deploy.sh --t <trigger_type>" to create all necessary resources in azure.


# Database Trigger
When running database trigger some manual adjustments have to be made. As of writing this thesis, it was not possible to set the FeedPollDelay on the Cosmos DB trigger through pulumi which resulted in the trigger only got triggered each 5 seconds (default value for FeedPollDelay). 
 - Go to Azure Portal
 - Navigate to the databaseTrigger function app
 - In the configuration tab, locate the property "WEBSITE_RUN_FROM_PACKAGE", delete it, and SAVE.
 - Navigate to Functions tab in the menu, choose your trigger, and then to "Code + Test".
 - Navigate to "function.json" and add property - "feedPollDelay": 1000
 - SAVE
 - Now you can run the database trigger experiment

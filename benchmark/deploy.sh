TRIGGER_TYPE=''
RUNTIME=''
FILE_NAME='../.env'
FUNCTION_URL=''
LOCATION=''
FUNCTION_APP_URL=''
FUNCTIONAPP_NAME=''
RESOURCE_GROUP=''
BURST_SIZE=''

deploy_shared_resources() {
  BURST_SIZE=$(sed -n 's/^BURST_SIZE=\(.*\)/\1/p'  < './.env')
  echo "PULUMI_AZURE_LOCATION=\"$LOCATION\"" >'./.env'
  echo "RUNTIME=\"$RUNTIME\"" >>'./.env'
  echo "BENCHMARK_URL=" >> './.env'
  echo "BURST_SIZE=$BURST_SIZE" >> './.env'
  
  cd shared_resources/ && pulumi stack select shared -c && pulumi up -f -y

  # Get Resource group name
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)
  # Get Function app name
  FUNCTION_APP_URL=$(pulumi stack output functionAppUrl)
  FUNCTIONAPP_NAME=$(pulumi stack output functionAppName)

  # Create API key to be able to use Azure Insights REST API TODO use it with REST API
  az config set extension.use_dynamic_install=yes_without_prompt # Required to install and use app-insights module

}

deploy_http_trigger() {
  checkIfSharedNeedDeploy

  # Deploy HTTP trigger
  cd receiver_component/http/ && pulumi stack select receiver -c && pulumi up -f -y

  # Correct runtime
  if [ "$RUNTIME" = 'dotnet' ]; then
    cd runtimes/dotnet
  elif [ "$RUNTIME" = 'node' ] || [ "$RUNTIME" = '' ]; then
    cd runtimes/node
  fi

  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force
  FUNCTION_URL=$(func azure functionapp list-functions $FUNCTIONAPP_NAME --show-keys)

  FUNCTION_URL=$(echo "$FUNCTION_URL"|grep -Eo "https://[^ >]+"|head -1)

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=http\&input=$FUNCTION_URL\"|" $FILE_NAME
  curl -s $FUNCTION_APP_URL > /tmp/output.html
  echo "Start HTTP benchmark:"
  echo "$BENCHMARK_URL?trigger=http&input=$FUNCTION_URL"
}

deploy_storage_trigger() {
  checkIfSharedNeedDeploy

  # Deploy storage trigger
  cd receiver_component/blob_storage/ && pulumi stack select receiver -c && pulumi up -f -y

  STORAGE_CONNECTION_STRING=$(pulumi stack output storageConnectionString)
  STORAGE_ACCOUNT_NAME=$(pulumi stack output storageAccountName)
  CONTAINER_NAME=$(pulumi stack output containerName)

  if [ "$RUNTIME" = "dotnet" ]; then
    az functionapp config appsettings set --name $FUNCTIONAPP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings "STORAGE_CONNECTION_STRING=$STORAGE_CONNECTION_STRING" "STORAGE_CONTAINER_PATH=$CONTAINER_NAME/{name}"
  elif [ "$RUNTIME" = "node" ]; then
    az functionapp config appsettings set --name $FUNCTIONAPP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings "STORAGE_CONNECTION_STRING=$STORAGE_CONNECTION_STRING" "STORAGE_CONTAINER_PATH=$CONTAINER_NAME"
  fi

  cd runtimes/$RUNTIME
  
  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"

  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=storage\&input=$CONTAINER_NAME,$STORAGE_ACCOUNT_NAME\"|" $FILE_NAME

  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=storage&input=$CONTAINER_NAME,$STORAGE_ACCOUNT_NAME\"" >>$FILE_NAME
  
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start storage trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=storage&input=$CONTAINER_NAME,$STORAGE_ACCOUNT_NAME"
}

deploy_queue_trigger() {
  checkIfSharedNeedDeploy

  # Deploy queue trigger
  cd receiver_component/queue_storage/ && pulumi stack select receiver -c && pulumi up -f -y

  # Get storage account name and queue name
  QUEUE_CONNECTION_STRING=$(pulumi stack output queueConnectionString)
  STORAGE_ACCOUNT_NAME=$(pulumi stack output storageAccountName)
  QUEUE_NAME=$(pulumi stack output queueName)

  az functionapp config appsettings set --name $FUNCTIONAPP_NAME \
  --resource-group $RESOURCE_GROUP \
  --settings "QUEUE_CONNECTION_STRING=$QUEUE_CONNECTION_STRING" "QUEUE_NAME=$QUEUE_NAME"

  cd runtimes/$RUNTIME

  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"

  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=queue\&input=$QUEUE_NAME,$STORAGE_ACCOUNT_NAME\"|" $FILE_NAME

  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=queue&input=$QUEUE_NAME,$STORAGE_ACCOUNT_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start queue trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=queue&input=$QUEUE_NAME,$STORAGE_ACCOUNT_NAME"
}

deploy_database_trigger() {
  checkIfSharedNeedDeploy

  # Deploy database trigger
  cd receiver_component/database/ && pulumi stack select receiver -c && pulumi up -f -y

  # Get storage account name and database name
  CONTAINER_NAME=$(pulumi stack output containerName)
  DATABASE_NAME=$(pulumi stack output databaseName)

  cd runtimes/$RUNTIME
  
  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=database\&input=$DATABASE_NAME,$CONTAINER_NAME\"|" $FILE_NAME
  
  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=database&input=$DATABASE_NAME,$CONTAINER_NAME\"" >>$FILE_NAME

  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start database trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=database&input=$DATABASE_NAME,$CONTAINER_NAME"
}

deploy_serviceBus_trigger() {
  checkIfSharedNeedDeploy

  # Deploy serviceBus trigger
  cd receiver_component/service_bus_topic/ && pulumi stack select receiver -c && pulumi up -f -y

  # Get storage account name and serviceBus name
  SERVICE_BUS_NAMESPACE=$(pulumi stack output serviceBusNamespace)
  TOPIC_NAME=$(pulumi stack output topicName)
  SERVICE_BUS_NAMESPACE_CONNECTION=$(pulumi stack output serviceBusNamespaceConnection)
  TOPIC_SUBSCRIPTION_NAME=$(pulumi stack output topicSubscriptionName)

  az functionapp config appsettings set --name $FUNCTIONAPP_NAME \
  --resource-group $RESOURCE_GROUP \
  --settings "TOPIC_NAME=$TOPIC_NAME" "TOPIC_SUBSCRIPTION_NAME=$TOPIC_SUBSCRIPTION_NAME" "SERVICE_BUS_NAMESPACE_CONNECTION=$SERVICE_BUS_NAMESPACE_CONNECTION"

  cd runtimes/$RUNTIME
  
  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"

  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=serviceBusTopic\&input=$SERVICE_BUS_NAMESPACE,$TOPIC_NAME\"|" $FILE_NAME

  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=serviceBus&input=$SERVICE_BUS_NAMESPACE,$TOPIC_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start serviceBus trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=serviceBus&input=$SERVICE_BUS_NAMESPACE,$TOPIC_NAME"
}

deploy_eventHub_trigger() {
  checkIfSharedNeedDeploy

  # Deploy database trigger
  cd receiver_component/event_hub/ && pulumi stack select receiver -c && pulumi up -f -y

  # Get event hub function app details
  EVENT_HUB_NAME=$(pulumi stack output eventHubName)
  EVENT_HUB_NAMESPACE=$(pulumi stack output eventHubNamespace)
  EVENT_HUB_CONNTECTION_STRING=$(pulumi stack output eventHubConnectionString)

  az functionapp config appsettings set --name $FUNCTIONAPP_NAME \
  --resource-group $RESOURCE_GROUP \
  --settings "EVENT_HUB_CONNTECTION_STRING=$EVENT_HUB_CONNTECTION_STRING" "EVENT_HUB_NAME=$EVENT_HUB_NAME"

  cd runtimes/$RUNTIME

  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"

  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=eventHub\&input=$EVENT_HUB_NAME,$EVENT_HUB_NAMESPACE\"|" $FILE_NAME

  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=eventHub&input=$EVENT_HUB_NAME,$EVENT_HUB_NAMESPACE\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start event hub trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=eventHub&input=$EVENT_HUB_NAME,$EVENT_HUB_NAMESPACE"
}

deploy_eventGrid_trigger() {
  checkIfSharedNeedDeploy
  
  # In the case of eventGrid, the trigger has to be published before a subscription resource associated to the trigger can be created.

  cd receiver_component/event_grid/runtimes/$RUNTIME

  func azure functionapp publish $FUNCTIONAPP_NAME --$RUNTIME --force

  cd ../../../..

  # Deploy eventGrid trigger
  cd receiver_component/event_grid/ && pulumi stack select receiver -c && pulumi up -f -y

  # Get event grid storage and container name
  EVENT_GRID_STORAGE_NAME=$(pulumi stack output eventGridStorageAccountName)
  EVENT_GRID_CONTAINER_NAME=$(pulumi stack output eventGridStorageContainerName)

  cd ../..

  # Deploy infrastructure
  cd invocation_component/ && pulumi stack select invocation -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"

  sed -i"" -e "s|^BENCHMARK_URL=.*|BENCHMARK_URL=\"$BENCHMARK_URL\?trigger=eventGrid\&input=$EVENT_GRID_STORAGE_NAME,$EVENT_GRID_CONTAINER_NAME\"|" $FILE_NAME

  #echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=eventGrid&input=$EVENT_GRID_STORAGE_NAME,$EVENT_GRID_CONTAINER_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP_URL} > /tmp/output.html
  echo "Start event grid trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=eventGrid&input=$EVENT_GRID_STORAGE_NAME,$EVENT_GRID_CONTAINER_NAME"
}

checkIfSharedNeedDeploy(){
  BURST_SIZE=$(sed -n 's/^BURST_SIZE=\(.*\)/\1/p'  < ./.env)
  TEMP_RUNTIME=''
  TEMP_LOCATION=''
  while read line; do    
    if [[ $line == RUNTIME* ]]; then
      TEMP_RUNTIME=$line
    fi
    if [[ $line == PULUMI_AZURE_LOCATION* ]]; then
      TEMP_LOCATION=$line
    fi
done < "./.env" 

if [ "$TEMP_RUNTIME" = "" ] || [ "$TEMP_RUNTIME" != "RUNTIME=\"$RUNTIME\"" ] || [ "$TEMP_LOCATION" = "" ] || [ "$TEMP_LOCATION" != "PULUMI_AZURE_LOCATION=\"$LOCATION\"" ]; then
  echo Shared needs to be re-deployed because either the runtime or location has been changed.
  deploy_shared_resources
  cd ..
else 
  echo No change of runtime nor location. Skipping update of shared resources.
  sed -i"" -e "s|^BURST_SIZE=.*|BURST_SIZE=$BURST_SIZE|" "./.env"
  cd shared_resources
  # Get Resource group name
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)
  # Get Function app name
  FUNCTION_APP_URL=$(pulumi stack output functionAppUrl)
  FUNCTIONAPP_NAME=$(pulumi stack output functionAppName)
  cd ..
fi
}
# Read input flags
while getopts 't:r:l:' flag; do
  case "${flag}" in
  t) TRIGGER_TYPE="${OPTARG}" ;;
  r) RUNTIME="${OPTARG}" ;;
  l) LOCATION="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

if [ "$RUNTIME" = 'node' ] || [ "$RUNTIME" = 'dotnet' ]; then
  echo "Runtime valid: $RUNTIME"
elif [ "$RUNTIME" = '' ]; then
  echo 'Default runtime: node'
  RUNTIME='node'
else
  echo 'ERROR: Unsupported runtime'
  exit
fi

if [ "$LOCATION" = 'northeurope' ] || [ "$LOCATION" = 'eastus' ]; then
  echo "Location valid: $LOCATION"
elif ["$LOCATION" = '']; then
  echo 'Default Location: northeurope'
  LOCATION='northeurope'
else
  echo 'ERROR: Unsupported location'
  exit
fi


# Decide which trigger to deploy based on input flag
if [ "$TRIGGER_TYPE" = 'http' ]; then
  deploy_http_trigger
elif [ "$TRIGGER_TYPE" = 'storage' ]; then
  deploy_storage_trigger
elif [ "$TRIGGER_TYPE" = 'queue' ]; then
  deploy_queue_trigger
elif [ "$TRIGGER_TYPE" = 'database' ]; then
  deploy_database_trigger
elif [ "$TRIGGER_TYPE" = 'serviceBus' ]; then
  deploy_serviceBus_trigger
elif [ "$TRIGGER_TYPE" = 'eventHub' ]; then
  deploy_eventHub_trigger
elif [ "$TRIGGER_TYPE" = 'eventGrid' ]; then
  deploy_eventGrid_trigger
else
  echo 'Error: Unsupported trigger'
fi

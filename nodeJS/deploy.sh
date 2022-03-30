TRIGGER_TYPE=''
FILE_NAME='../.env'

deploy_shared_resources() {
  cd shared/ && pulumi stack select shared -c && pulumi up -f -y

  # Get App Id
  APP_ID=$(pulumi stack output insightsAppId)
  # Get Insights name
  INSIGHTS_NAME=$(pulumi stack output insightsName)
  # Get Resource group name
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)

  # Create API key to be able to use Azure Insights REST API TODO use it with REST API
  az config set extension.use_dynamic_install=yes_without_prompt # Required to install and use app-insights module
  API_KEY_NAME=$(date +%s%N)                                     # Set current time as name
  API_KEY=$(
    az monitor app-insights api-key create --api-key $API_KEY_NAME --read-properties ReadTelemetry --resource-group $RESOURCE_GROUP --app $INSIGHTS_NAME | \
    python3 -c "import sys, json; print(json.load(sys.stdin)['apiKey'])"
  ) # Get apiKey from resulting JSON using python
}

deploy_http_trigger() {
  deploy_shared_resources

  cd ..

  # Deploy HTTP trigger
  cd http/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"Http\"" >>$FILE_NAME
  # Get url to HTTP trigger gateway
  TRIGGER_URL=$(pulumi stack output url)
  FUNCTION_APP=$(pulumi stack output functionApp)

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=http&input=$TRIGGER_URL\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start HTTP trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=http&input=$TRIGGER_URL"
}

deploy_storage_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  # Get name of resource group
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)

  cd ..

  # Deploy storage trigger
  cd storage/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"Storage\"" >>$FILE_NAME

  # Assign required roles, get storage account name and container name
  STORAGE_ACCOUNT_NAME=$(pulumi stack output storageAccountName)
  CONTAINER_NAME=$(pulumi stack output containerName)
  FUNCTION_APP=$(pulumi stack output functionApp)
  ##
  # assign role "Storage Blob Data Contributor" to relevant asignees
  ##

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=storage&input=$CONTAINER_NAME,$STORAGE_ACCOUNT_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start storage trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=storage&input=$CONTAINER_NAME,$STORAGE_ACCOUNT_NAME"
}

deploy_queue_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  # Get name of resource group
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)

  cd ..

  # Deploy queue trigger
  cd queue/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"Queue\"" >>$FILE_NAME

  # Get storage account name and queue name
  STORAGE_ACCOUNT_NAME=$(pulumi stack output storageAccountName)
  QUEUE_NAME=$(pulumi stack output queueName)
  FUNCTION_APP=$(pulumi stack output functionApp)

  ##
  # assign role "Storage Blob Data Contributor" to relevant asignees
  ##

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=queue&input=$QUEUE_NAME,$STORAGE_ACCOUNT_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start queue trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=queue&input=$QUEUE_NAME,$STORAGE_ACCOUNT_NAME"
}

deploy_database_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  # Get name of resource group
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)

  cd ..

  # Deploy database trigger
  cd database/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"Database\"" >>$FILE_NAME

  # Get storage account name and database name
  CONTAINER_NAME=$(pulumi stack output containerName)
  DATABASE_NAME=$(pulumi stack output databaseName)
  FUNCTION_APP=$(pulumi stack output functionApp)

  ##
  # assign role "Storage Blob Data Contributor" to relevant asignees
  ##

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=database&input=$DATABASE_NAME,$CONTAINER_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start database trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=database&input=$DATABASE_NAME,$CONTAINER_NAME"
}

deploy_timer_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  cd ..

  # Deploy database trigger
  cd timer/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"Timer\"" >>$FILE_NAME

  # Get timer function app name and trigger name
  TIMER_FUNCTION_APP_NAME=$(pulumi stack output timerFunctionAppName)
  TIMER_TRIGGER_NAME=$(pulumi stack output timerTriggerAppName)

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=timer&input=https://$TIMER_FUNCTION_APP_NAME/admin/functions/$TIMER_TRIGGER_NAME\"" >>$FILE_NAME

  echo "Start timer trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=timer&input=https://$TIMER_FUNCTION_APP_NAME/admin/functions/$TIMER_TRIGGER_NAME"
}

deploy_serviceBus_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  # Get name of resource group
  RESOURCE_GROUP=$(pulumi stack output resourceGroupName)

  cd ..

  # Deploy serviceBus trigger
  cd service_Bus/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"ServiceBus\"" >>$FILE_NAME

  # Get storage account name and serviceBus name
  SERVICE_BUS_NAMESPACE=$(pulumi stack output serviceBusNamespace)
  TOPIC_NAME=$(pulumi stack output topicName)
  FUNCTION_APP=$(pulumi stack output functionApp)

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=serviceBus&input=$SERVICE_BUS_NAMESPACE,$TOPIC_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start serviceBus trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=serviceBus&input=$SERVICE_BUS_NAMESPACE,$TOPIC_NAME"
}

deploy_eventHub_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  cd ..

  # Deploy database trigger
  cd event_hub/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"EventHub\"" >>$FILE_NAME

  # Get timer function app name and trigger name
  EVENT_HUB_NAME=$(pulumi stack output eventHubName)
  EVENT_HUB_NAMESPACE=$(pulumi stack output eventHubNamespace)
  FUNCTION_APP=$(pulumi stack output functionApp)

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=eventHub&input=$EVENT_HUB_NAME,$EVENT_HUB_NAMESPACE\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start event hub trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=eventHub&input=$EVENT_HUB_NAME,$EVENT_HUB_NAMESPACE"
}

deploy_eventGrid_trigger() {
  # Deploy shared resources
  deploy_shared_resources

  cd ..

  # Deploy database trigger
  cd event_grid/ && pulumi stack select trigger -c && pulumi up -f -y

  #Write picked trigger
  echo "TRIGGER_TYPE=\"EventGrid\"" >>$FILE_NAME

  # Get timer function app name and trigger name
  EVENT_GRID_STORAGE_NAME=$(pulumi stack output eventGridStorageAccountName)
  EVENT_GRID_CONTAINER_NAME=$(pulumi stack output eventGridStorageContainerName)
  FUNCTION_APP=$(pulumi stack output functionApp)

  cd ..

  # Deploy infrastructure
  cd infra/ && pulumi stack select infra -c && pulumi up -f -y

  # Get url to benchmark gateway
  BENCHMARK_URL=$(pulumi stack output url)

  echo "Write URL to .env"
  echo "BENCHMARK_URL=\"$BENCHMARK_URL?trigger=eventGrid&input=$EVENT_GRID_STORAGE_NAME,$EVENT_GRID_CONTAINER_NAME\"" >>$FILE_NAME
  echo "Initilize Function App"
  curl -s ${FUNCTION_APP} > /tmp/output.html
  echo "Start event grid trigger benchmark:"
  echo "$BENCHMARK_URL?trigger=eventGrid&input=$EVENT_GRID_STORAGE_NAME,$EVENT_GRID_CONTAINER_NAME"
}

# Read input flags
while getopts 't:' flag; do
  case "${flag}" in
  t) TRIGGER_TYPE="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

# Decide which trigger to deploy based on input flag
if [ "$TRIGGER_TYPE" = 'http' ]; then
  deploy_http_trigger
elif [ "$TRIGGER_TYPE" = 'storage' ]; then
  deploy_storage_trigger
elif [ "$TRIGGER_TYPE" = 'queue' ]; then
  deploy_queue_trigger
elif [ "$TRIGGER_TYPE" = 'database' ]; then
  deploy_database_trigger
elif [ "$TRIGGER_TYPE" = 'timer' ]; then
  deploy_timer_trigger
elif [ "$TRIGGER_TYPE" = 'serviceBus' ]; then
  deploy_serviceBus_trigger
elif [ "$TRIGGER_TYPE" = 'eventHub' ]; then
  deploy_eventHub_trigger
elif [ "$TRIGGER_TYPE" = 'eventGrid' ]; then
  deploy_eventGrid_trigger
else
  echo 'Error: Unsupported trigger'
fi

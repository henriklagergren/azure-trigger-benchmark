TRIGGER_TYPE=''
NUMBER_TIMES=0

deploy_http_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Http experiment ${NUMBER_TIMES} started"
    curl "https://infraendpoint874ca9a4.azurewebsites.net/api/InfraEndpoint?trigger=http&input=https://httptrigger17b53ce0.azurewebsites.net/api/HttpTrigger"
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES - 1))
  done
  echo 'Http experiment finished'
}

deploy_storage_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Storage experiment ${NUMBER_TIMES} started"
    curl "https://infraendpoint2bfdfae2.azurewebsites.net/api/InfraEndpoint?trigger=storage&input=container4231d2c7,accounte7fd09c"
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES - 1))
  done
  echo 'Storage experiment finished'
}

deploy_queue_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Queue experiment ${NUMBER_TIMES} started"
    curl ''
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES - 1))
  done
  echo 'Queue experiment finished'
}

deploy_database_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Database experiment ${NUMBER_TIMES} started"
    curl ''
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES - 1))
  done
  echo 'Database experiment finished'
}

# Read input flags
while getopts ':t:a:' opt; do
  case "${opt}" in
  t) TRIGGER_TYPE="${OPTARG}" ;;
  a) NUMBER_TIMES="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

# Decide which trigger to deploy based on input flag
if [ "$TRIGGER_TYPE" = 'http' ] && [ "$NUMBER_TIMES" != 0 ]; then
  deploy_http_trigger
elif [ "$TRIGGER_TYPE" = 'storage' ] && [ "$NUMBER_TIMES" != 0 ]; then
  deploy_storage_trigger
elif [ "$TRIGGER_TYPE" = 'queue' ] && [ "$NUMBER_TIMES" != 0 ]; then
  deploy_queue_trigger
elif [ "$TRIGGER_TYPE" = 'database' ] && [ "$NUMBER_TIMES" != 0 ]; then
  deploy_database_trigger
else
  echo 'Error: Unsupported trigger based on t-flag or number of executions not specified based on a-flag'
fi

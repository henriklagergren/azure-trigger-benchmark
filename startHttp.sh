TRIGGER_TYPE=''
NUMBER_TIMES=0

deploy_http_trigger(){
  echo 'Http experiment started'
while [ $NUMBER_TIMES -ne 0 ];
do
    curl 'https://infraendpoint209f9e42.azurewebsites.net/api/InfraEndpoint?trigger=http&input=https://httptrigger6bc14f89.azurewebsites.net/api/HttpTrigger'
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES-1))
done
  echo 'Http experiment finished'
}


# Read input flags
while getopts ':t:a:' opt; do
  case "${opt}" in
    t) TRIGGER_TYPE="${OPTARG}";;
    a) NUMBER_TIMES="${OPTARG}";;
    *) exit 1 ;;
  esac
done

# Decide which trigger to deploy based on input flag
if [ "$TRIGGER_TYPE" = 'http' ]
then
  deploy_http_trigger
elif [ "$TRIGGER_TYPE" = 'storage' ]
then
  deploy_storage_trigger
elif [ "$TRIGGER_TYPE" = 'queue' ]
then
  deploy_queue_trigger
else
  echo 'Error: Unsupported trigger'
fi
NUMBER_TIMES=0

deploy_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Experiment ${NUMBER_TIMES} started"
    curl 'https://infraendpointec69092a.azurewebsites.net/api/InfraEndpoint?trigger=serviceBus&input=serviceBusNamespace75e7d141,servicebustopic151c7d59'
    echo ''
    ((NUMBER_TIMES = $NUMBER_TIMES - 1))
  done
  echo 'Experiment finished'
}

# Read input flags
while getopts ':a:' opt; do
  case "${opt}" in
  a) NUMBER_TIMES="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

deploy_trigger

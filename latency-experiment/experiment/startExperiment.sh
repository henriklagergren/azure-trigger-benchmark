NUMBER_TIMES=0

deploy_trigger() {
  while [ $NUMBER_TIMES -ne 0 ]; do
    echo "Experiment ${NUMBER_TIMES} started"
    curl 'https://infraendpoint8778df01.azurewebsites.net/api/InfraEndpoint?trigger=storage&input=containerbc1d35c1,account4a49d60'
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

TRIGGER_TYPE=''
RUNTIME=''
LOCATION=''
BURST_SIZES=(10 50 100 300)
INVOKE_DELAYS=(1 5 10 100)

deploy_http_benchmark() {
  echo "Deploying http trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t http -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Http trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting Http benchmark"
  run_k6
  echo "Http benchmark finished"
}

deploy_storage_benchmark() {
  echo "Deploying storage trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t storage -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Storage trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting storage benchmark"
  run_k6
  echo "Storage benchmark finished"
}

deploy_queue_benchmark() {
  echo "Deploying queue trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t queue -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Queue trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting queue benchmark"
  run_k6
  echo "Queue benchmark finished"
}

deploy_database_benchmark() {
  echo "Deploying database trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t database -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Database trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting database benchmark"
  run_k6
  echo "Database benchmark finished"
}

deploy_timer_benchmark() {
  echo "Deploying timer trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t timer -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Timer trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting timer benchmark"
  run_k6
  echo "Timer benchmark finished"
}

deploy_serviceBus_benchmark() {
  echo "Deploying Service bus trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t serviceBus -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Service bus trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting Service bus benchmark"
  run_k6
  echo "Service bus benchmark finished"
}

deploy_eventHub_benchmark() {
  echo "Deploying Event hub trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t eventHub -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Event hub trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting Event hub benchmark"
  run_k6
  echo "Event hub benchmark finished"
}

deploy_eventGrid_benchmark() {
  echo "Deploying Event grid trigger"
  cd ..
  cd ..
  bash ./deploy.sh -t eventGrid -r $RUNTIME -l $LOCATION
  cd experiment/k6
  echo "Event grid trigger deployed"
  echo "Wait 10s before starting benchmark"
  sleep 10
  echo "Starting Event grid benchmark"
  run_k6
  echo "Event grid benchmark finished"
}

deploy_all_benchmarks() {
  deploy_http_benchmark
  deploy_storage_benchmark
  deploy_queue_benchmark
  deploy_database_benchmark
  deploy_serviceBus_benchmark
  deploy_eventHub_benchmark
  deploy_eventGrid_benchmark
}


run_k6() {
  var=$(grep BURST_SIZE ./../../.env | cut -d '"' -f2)
  if [ "$var" = "all" ]; then
    for b in "${BURST_SIZES[@]}"; do
      echo "Running k6 with all sizes: $b" 
      k6 run -e BENCHMARK_URL=$(grep BENCHMARK_URL ./../../.env | cut -d '"' -f2) -e BURST_SIZE=$b -e INVOKE_DELAY='0' benchmark.js --quiet
      echo "Waiting 10s" 
      sleep 10
    done
  else
    echo "Running k6 with burst size : ${var}"
    k6 run -e BENCHMARK_URL=$(grep BENCHMARK_URL ./../../.env | cut -d '"' -f2) -e BURST_SIZE=${var} -e INVOKE_DELAY='0' benchmark.js --quiet
  fi

  for i in "${INVOKE_DELAYS[@]}"; do
      echo "Running k6 with invoke delay: $i" 
      echo "Waiting 10s" 
      sleep 10
      k6 run -e BENCHMARK_URL=$(grep BENCHMARK_URL ./../../.env | cut -d '"' -f2) -e INVOKE_DELAY=$i -e BURST_SIZE='0' benchmark.js --quiet
  done
}

# Read input flags
while getopts 't:r:l:b:' flag; do
  case "${flag}" in
  t) TRIGGER_TYPE="${OPTARG}" ;;
  r) RUNTIME="${OPTARG}" ;; 
  l) LOCATION="${OPTARG}" ;;
  b) BURST_SIZE="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

BURST_SIZE_OLD=''

if [ "$BURST_SIZE" = '10' ] || [ "$BURST_SIZE" = '50' ] || [ "$BURST_SIZE" = '100' ] || [ "$BURST_SIZE" = '300' ] || [ "$BURST_SIZE" = 'all' ]; then
  echo "Burst size valid: $BURST_SIZE"
  BURST_SIZE_OLD=$(sed -n 's/^BURST_SIZE=\(.*\)/\1/p'  < './../../.env')
else
  echo "ERROR: Invalid burst size: $BURST_SIZE"
  exit
fi 

# Replace the old value in .env from key BURST_SIZE. If an old one does not exist, add the key-value pair
if [ $BURST_SIZE_OLD = "\"10\"" ] || [ $BURST_SIZE_OLD = "\"50\"" ] || [ $BURST_SIZE_OLD = "\"100\"" ] || [ $BURST_SIZE_OLD = "\"300\"" ] || [ "$BURST_SIZE_OLD" = "\"all\"" ] ; then
  sed -i"" -e "s|^BURST_SIZE=.*|BURST_SIZE=\"$BURST_SIZE\"|" './../../.env'
else
  echo "BURST_SIZE=\"$BURST_SIZE\"" >>'./../../.env'
fi


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
  deploy_http_benchmark
elif [ "$TRIGGER_TYPE" = 'storage' ]; then
  deploy_storage_benchmark
elif [ "$TRIGGER_TYPE" = 'queue' ]; then
  deploy_queue_benchmark
elif [ "$TRIGGER_TYPE" = 'database' ]; then
  deploy_database_benchmark
elif [ "$TRIGGER_TYPE" = 'timer' ]; then
  deploy_timer_benchmark
elif [ "$TRIGGER_TYPE" = 'serviceBus' ]; then
  deploy_serviceBus_benchmark
elif [ "$TRIGGER_TYPE" = 'eventHub' ]; then
  deploy_eventHub_benchmark
elif [ "$TRIGGER_TYPE" = 'eventGrid' ]; then
  deploy_eventGrid_benchmark
elif [ "$TRIGGER_TYPE" = 'all' ]; then
  deploy_all_benchmarks
else
  echo 'Error: Unsupported trigger'
fi
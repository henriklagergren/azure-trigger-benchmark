TRIGGER_TYPE=''

# Read input flags
while getopts 't:' flag; do
  case "${flag}" in
  t) TRIGGER_TYPE="${OPTARG}" ;;
  *) exit 1 ;;
  esac
done

# Decide which trigger to deploy based on input flag
if [ "$TRIGGER_TYPE" = 'eventHub' ]; then
    cd event_hub/ && pulumi destroy -f -y
    cd ..
    cd infra/ && pulumi destroy -f -y
    cd ..
    cd shared/ && pulumi destroy -f -y
elif [ "$TRIGGER_TYPE" = 'http' || "$TRIGGER_TYPE" = 'storage' ||  "$TRIGGER_TYPE" = 'database' || "$TRIGGER_TYPE" = 'queue' || "$TRIGGER_TYPE" = 'storage' || "$TRIGGER_TYPE" = 'timer' ]; then
    cd $TRIGGER_TYPE/ && pulumi destroy -f -y
    cd ..
    cd infra/ && pulumi destroy -f -y
    cd ..
    cd shared/ && pulumi destroy -f -y
fi
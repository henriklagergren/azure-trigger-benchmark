TRIGGER_TYPE=''

# Read input flags
while getopts 't:' flag; do
    case "${flag}" in
    t) TRIGGER_TYPE="${OPTARG}" ;;
    *) exit 1 ;;
    esac
done

# Decide which trigger to destroy based on input flag
    cd receiver_component/$TRIGGER_TYPE/ && pulumi destroy -f -y
    cd ..
    cd invocation_component/ && pulumi destroy -f -y
    cd ..
    cd shared_resources/ && pulumi destroy -f -y

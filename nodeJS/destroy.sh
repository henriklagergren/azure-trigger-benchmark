TRIGGER_TYPE=''

# Read input flags
while getopts 't:' flag; do
    case "${flag}" in
    t) TRIGGER_TYPE="${OPTARG}" ;;
    *) exit 1 ;;
    esac
done

# Decide which trigger to destroy based on input flag
    cd $TRIGGER_TYPE/ && pulumi destroy -f -y
    cd ..
    cd infra/ && pulumi destroy -f -y
    cd ..
    cd shared/ && pulumi destroy -f -y

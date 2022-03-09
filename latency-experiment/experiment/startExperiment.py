import os
import sys
import requests
import time

from dotenv import load_dotenv
load_dotenv('./../.env')

BENCHMARK_URL = os.getenv('BENCHMARK_URL')


def deploy_trigger():
    NUMBER_TIMES = int(sys.argv[1])
    DELAY = int(sys.argv[2]) / 1000
    while (NUMBER_TIMES != 0):
        print(f"Experiment {NUMBER_TIMES} started")
        res = requests.get(BENCHMARK_URL)
        time.sleep(DELAY)
        NUMBER_TIMES = NUMBER_TIMES - 1
    return print('Experiment finished')


if(int(sys.argv[2]) < 10000 and int(sys.argv[2]) >= 0 and int(sys.argv[1]) < 10000 and int(sys.argv[1]) > 0):
    print(BENCHMARK_URL)
    deploy_trigger()
else:
    print("The provided arguments are not valid. First arg is number of times to execute the experiment. Second arg is the delay between the calls.")

from cgitb import reset
from tracemalloc import start
import requests
import json
from itertools import groupby
from datetime import datetime
import csv
import re
import os
from dotenv import load_dotenv
from datetime import date
from datetime import timedelta
import argparse
import sys
import pandas as pd
import numpy as np

parser = argparse.ArgumentParser()

parser.add_argument("-t", "--trigger", help="Trigger name")
parser.add_argument("-r", "--runtime", help="Runtime name")

args = parser.parse_args()

load_dotenv('./../../.env')

trigger_pick = ["all", "http", "storage", "queue",
                "database", "eventhub", "eventgrid", "servicebustopic"]

runtime_pick = ["all", "node", "dotnet"]

if(str(args.trigger).lower() not in trigger_pick):
    print("Invalid trigger.\nValid entries: ", end="")
    print(*trigger_pick, sep=", ")
    sys.exit()

if(str(args.runtime).lower() not in runtime_pick):
    print("Invalid runtime.\nValid entries: ", end="")
    print(*runtime_pick, sep=", ")
    sys.exit()

if(str(args.runtime).lower() == 'all'):
    runtime_pick.remove("all")
else:
    runtime_pick = [str(args.runtime)]

if(str(args.trigger).lower() == 'all'):
    trigger_pick.remove("all")
else:
    trigger_pick = [str(args.trigger)]

dash = '-' * 119

for runtime in runtime_pick:

    all_entries = pd.read_csv("./../data/" + runtime + ".csv")

    print('')
    print('Partitioning groups...')

    all_groups = []
    saved_id = None
    index = -1
    requestCount = 0

    for trigger_type in trigger_pick:
        print('Analyzes latency for ' + trigger_type)
        all_trigger_delays_ms = []
        grouped_entries = all_entries[all_entries['trigger'] == trigger_type].groupby(
            'operation_id')

        grouped_entries.filter(
            lambda x: (x['type'].value_counts() == 2).any())

        for name, group in grouped_entries:

            if(trigger_type != "http"):
                invoker = group[group.name == "completiontrack" + trigger_type]
            else:
                invoker = group[group.name ==
                                "get /api/httptrigger-" + runtime]

            receiver = group[group.name ==
                             'custom operationid ' + trigger_type]

            if(len(receiver.index) > 0 and len(invoker.index) > 0):
                delta = datetime.strptime(
                    receiver.values[0][2], '%Y-%m-%d %H:%M:%S.%f') - datetime.strptime(invoker.values[0][2], '%Y-%m-%d %H:%M:%S.%f')
                if(delta.seconds < 500):
                    all_trigger_delays_ms.append(
                        (delta.seconds*1000000 + delta.microseconds) / 1000)

        print('')
        print('## RESULTS ' + trigger_type.upper() + " ##")
        print('')
        print(all_trigger_delays_ms)
        print('')
        print('Average: ' + str(sum(all_trigger_delays_ms) /
                                max(1, len(all_trigger_delays_ms))) + ' ms')
        print('')
        print('Number of valid entries: ' + str(len(all_trigger_delays_ms)))
        print('')

        with open("./../results/latency/" + trigger_type + '.csv', 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["trigger_type", "latency"])
            count = 0
            for value in all_trigger_delays_ms:
                writer.writerow([trigger_type, value])
                count = count + 1
        print('')
        print('')
        print('')

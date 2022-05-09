from cProfile import run
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

parser.add_argument("-test", "--test", help="Test name")

args = parser.parse_args()

load_dotenv('./../../.env')

triggers = ["http", "storage", "queue",
            "database", "eventhub", "eventgrid", "servicebustopic"]

runtimes = ["node", "dotnet"]

is_test = False

if(str(args.test).lower() != "none"):
    is_test = True

latency_results = pd.DataFrame(
    columns=["runtime", "trigger_type",
             "invoke_type", "invoke_input", "latency"])

for runtime in runtimes:

    if(is_test):
        all_entries = pd.read_csv("./../tests/" + str(args.test) + ".csv")
    else:
        all_entries = pd.read_csv("./../data/" + runtime + ".csv")

    for trigger_type in triggers:
        if(not is_test):
            print('Analyzes latency for ' + trigger_type + ' in ' + runtime)

        grouped_entries = all_entries[all_entries['trigger'] == trigger_type].groupby(
            'operation_id')

        grouped_entries = grouped_entries.filter(
            lambda x: (x['type'].value_counts() == 2).any()).groupby('operation_id')

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
                    latency_results = latency_results.append({"runtime": runtime, "trigger_type": trigger_type,
                                                              "invoke_type": invoker.values[0][8], "invoke_input": invoker.values[0][9], "latency": (delta.seconds*1000000 + delta.microseconds) / 1000}, ignore_index=True)

if(is_test):
    path = "./../tests/results.csv"
else:
    path = "./../results/latency/results.csv"

latency_results.to_csv(path, index=False)

from cgitb import reset
from tracemalloc import start
from unittest.mock import patch
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
parser.add_argument("-test", "--test", help="Test name")

args = parser.parse_args()

load_dotenv('./../../.env')

trigger_pick = ["all", "http", "storage", "queue",
                "database", "eventhub", "eventgrid", "servicebustopic"]

runtime_pick = ["all", "node", "dotnet"]

is_test = False

if(str(args.test).lower() != ""):
    is_test = True

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

    if(is_test):
        all_entries = pd.read_csv("./../tests/" + str(args.test) + ".csv")
    else:
        all_entries = pd.read_csv("./../data/" + runtime + ".csv")

    all_entries = all_entries.sort_values(by=['timestamp'])

    for trigger_type in trigger_pick:

        if(trigger_type != "http"):
            invoke_order = all_entries[all_entries.name ==
                                       "completiontrack" + trigger_type]
        else:
            invoke_order = all_entries[all_entries.name ==
                                       "get /api/httptrigger-" + runtime]

        receiver_order = all_entries[
            all_entries.name == 'custom operationid ' + trigger_type]

        invoke_amount = len(invoke_order.index)
        receiver_amount = len(receiver_order.index)

        missing_executes = []
        for operation_id in invoke_order.operation_id:
            if(operation_id not in receiver_order['operation_id'].values):
                missing_executes.append(operation_id)

        invoke_duplicates_list = list(filter((1).__ne__, invoke_order.groupby(
            'iteration_id').size().to_list()))

        invoke_duplicates_amount = sum(
            invoke_duplicates_list) - len(invoke_duplicates_list)

        receiver_duplicates_list = list(filter((1).__ne__, receiver_order.groupby(
            'operation_id').size().to_list()))

        receiver_duplicates_amount = sum(
            receiver_duplicates_list) - len(receiver_duplicates_list)

        invoke_order_no_duplicates = invoke_order.drop_duplicates(
            subset=['name', 'iteration_id'], keep=False)

        invoke_order_no_duplicates = invoke_order_no_duplicates.drop_duplicates(
            subset=['name', 'operation_id'], keep=False)

        receiver_order_no_duplicates = receiver_order.drop_duplicates(
            subset=['name', 'operation_id'], keep=False)

        receiver_order_no_duplicates = receiver_order_no_duplicates.drop_duplicates(
            subset=['name', 'iteration_id'], keep=False)

        invoke_order_ids = invoke_order_no_duplicates.operation_id.tolist()
        receiver_order_ids = receiver_order_no_duplicates.operation_id.tolist()

        for operation_id in missing_executes:
            invoke_order_ids.remove(operation_id)

        count = -1
        out_of_order = 0

        for invoke_id in invoke_order_ids:
            count = count + 1

            if invoke_id != receiver_order_ids[count]:
                out_of_order = out_of_order + 1
                if invoke_id in receiver_order_ids:
                    receiver_order_ids.remove(invoke_id)
                    receiver_order_ids.insert(count, invoke_id)

        if(not is_test):
            print('')
            print('## Results ' + trigger_type + ' ##')
            print('')
            print('Original amount of invokes: ' + str(invoke_amount))
            print('Original amount of executes: ' + str(receiver_amount))
            print('')
            print('Contains Duplicates')
            print('Invoke: ' + str(invoke_duplicates_amount))
            print('Execute: ' + str(receiver_duplicates_amount))
            print('')
            print('Missing executes: ' + str(len(missing_executes)))
            print('')
            print('Out of order: ' + str(out_of_order))
            print('')
            print('')
            print('')
            print('')

        if(is_test):
            path = "./../tests/results.csv"
        else:
            path = "./../results/reliability/" + trigger_type + '.csv'

        with open(path, 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["trigger_type", "original_invokes", "original_executes", "duplicates_invokes",
                            "duplicates_executes", "missing_executes", "out_of_order", "amount_invokes_after", "amount_executes_after"])
            writer.writerow([trigger_type, invoke_amount, receiver_amount, invoke_duplicates_amount,
                            receiver_duplicates_amount, len(missing_executes), out_of_order, len(invoke_order_ids), len(receiver_order_ids)])

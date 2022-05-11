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

parser.add_argument("-test", "--test", help="Test name")

args = parser.parse_args()

load_dotenv('./../../.env')

runtime_pick = ["node", "dotnet"]

is_test = False

if(str(args.test).lower() != "none"):
    is_test = True

reliability_results = pd.DataFrame(columns=["runtime", "trigger_type", "original_invokes", "original_executes", "duplicates_invokes",
                                            "duplicates_executes", "missing_executes", "out_of_order", "invoke_type", "invoke_input"])

for runtime in runtime_pick:

    if(is_test):
        all_entries = pd.read_csv("./../tests/" + str(args.test) + ".csv")
    else:
        all_entries = pd.read_csv("./../data/" + runtime + ".csv")

    all_entries = all_entries.sort_values(by=['timestamp'])

    all_entries = all_entries.groupby('trigger')

    for trigger_type, trigger_type_entries in all_entries:

        trigger_type_entries = trigger_type_entries.groupby('invoke_mode')

        for trigger_mode, trigger_mode_entries in trigger_type_entries:

            trigger_mode_entries = trigger_mode_entries.groupby(
                'invoke_input')

            for trigger_input, trigger_input_entries in trigger_mode_entries:

                if(trigger_type != "http"):
                    invoke_order = trigger_input_entries[trigger_input_entries.name ==
                                                         "completiontrack" + trigger_type]
                else:
                    invoke_order = trigger_input_entries[trigger_input_entries.name ==
                                                         "get /api/httptrigger-" + runtime]

                receiver_order = trigger_input_entries[
                    trigger_input_entries.name == 'custom operationid ' + trigger_type]

                invoke_amount = len(invoke_order.index)
                receiver_amount = len(receiver_order.index)

                missing_executes = []
                for operation_id in invoke_order.operation_id:
                    if(operation_id not in receiver_order['operation_id'].values):
                        missing_executes.append(operation_id)

                invoke_duplicates_amount = len(invoke_order[
                    'iteration_id'].to_list()) - len(list(set(invoke_order[
                        'iteration_id'].to_list())))

                receiver_duplicates_amount = len(receiver_order[
                    'operation_id'].to_list()) - len(list(set(receiver_order[
                        'operation_id'].to_list())))

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
                    if(operation_id in invoke_order_ids):
                        invoke_order_ids.remove(operation_id)

                count = -1
                out_of_order = 0

                for invoke_id in invoke_order_ids:
                    count = count + 1
                    if count < len(receiver_order_ids):
                        if invoke_id != receiver_order_ids[count]:
                            out_of_order = out_of_order + 1
                            if invoke_id in receiver_order_ids:
                                receiver_order_ids.remove(invoke_id)
                                receiver_order_ids.insert(count, invoke_id)
                reliability_results = reliability_results.append({"runtime": runtime, "trigger_type": trigger_type, "original_invokes": invoke_amount, "original_executes": receiver_amount, "duplicates_invokes": invoke_duplicates_amount,
                                                                  "duplicates_executes": receiver_duplicates_amount, "missing_executes": len(missing_executes), "out_of_order": out_of_order, "invoke_type": trigger_mode, "invoke_input": int(float(trigger_input))}, ignore_index=True)


if(is_test):
    path = "./../tests/results.csv"
else:
    path = "./../results/reliability/results.csv"

reliability_results.to_csv(path, index=False)

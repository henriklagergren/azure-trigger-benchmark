from cgitb import reset
from cmath import nan
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
import pandas as pd
import numpy as np
import sys
import threading

load_dotenv('./../../.env')

start_date = str(date.today() + timedelta(days=-1))
start_time = "01:00:00"

end_date = str(date.today() + timedelta(days=1))
end_time = "01:00:00"


INSIGHTS_API_KEY = os.getenv('INSIGHTS_API_KEY')
INSIGHTS_APP_ID = os.getenv('INSIGHTS_APP_ID')

timespan = str(start_date) + "T" + str(start_time) + "Z/" + \
    str(end_date) + "T" + str(end_time) + "Z"  # Time zone GMT
# Azure Insights REST API limits to 500 rows by default, many invocations => thousands of rows. Get top 5000 rows
application_ID = INSIGHTS_APP_ID
api_key = INSIGHTS_API_KEY
##

headers = {'x-api-key': api_key, }


def print_progress(current, total):
    sys.stdout.write('\r')
    sys.stdout.write(str(current) + "/" + str(total))
    sys.stdout.flush()


print('')
print('Fetching Requests...')
reqs = requests.get('https://api.applicationinsights.io/v1/apps/' +
                    application_ID + '/query?query=requests | where timestamp between(datetime("' + start_date + " " + start_time + '") .. datetime("' + end_date + " " + end_time + '"))', headers=headers)

reqs = reqs.json()

print('')
print('Fetching Dependencies...')
dependencies = requests.get('https://api.applicationinsights.io/v1/apps/' +
                            application_ID + '/query?query=dependencies | where timestamp between(datetime("' + start_date + " " + start_time + '") .. datetime("' + end_date + " " + end_time + '"))', headers=headers)
dependencies = dependencies.json()

print('')
print('Fetching Traces...')
traces = requests.get('https://api.applicationinsights.io/v1/apps/' +
                      application_ID + '/query?query=traces | where customDimensions contains "Coldstart" or message contains "InvokerEndpoint details" | where timestamp between(datetime("' + start_date + " " + start_time + '") .. datetime("' + end_date + " " + end_time + '"))', headers=headers)
traces = traces.json()

all_entries = pd.DataFrame(
    columns=['type', 'name', 'timestamp', 'operation_id', 'runtime', 'trigger', 'duration', 'iteration_id', 'invoke_mode', 'invoke_input'])

trigger_pick = ["http", "storage", "queue",
                "database", "eventhub", "eventgrid", "servicebustopic"]

runtime_pick = ["node", "dotnet"]

switch_operation_ids = []

print('')
print('Extracting Requests...')
entries = []
total_length = len(reqs["tables"][0]["rows"])
count = -1
for value in reqs["tables"][0]["rows"]:
    count = count + 1
    print_progress(count, total_length)

    timestamp = value[0]
    timestamp = timestamp.replace('T', ' ')
    timestamp = timestamp.replace('Z', '')
    milli = (timestamp + ".").split(".")[1] + "000"
    timestamp = timestamp.split(".")[0] + "." + milli[0:3]
    name = json.loads(value[10])["FullName"]
    operation_id = value[13]
    d = {}
    d['type'] = 'REQUEST'
    d['name'] = name.lower()
    d['timestamp'] = timestamp
    d['operation_id'] = operation_id

    if('node' in name):
        d['runtime'] = 'node'
    elif('dotnet' in name):
        d['runtime'] = 'dotnet'

    for trigger in trigger_pick:
        if(trigger.lower() in name.lower()):
            d['trigger'] = trigger
            break

    d['duration'] = value[8]

    entries.append(d)

all_entries = all_entries.append(entries, ignore_index=True)

print('')
print('Extracting Dependencies...')
entries = []
total_length = len(dependencies["tables"][0]["rows"])
count = -1
for value in dependencies["tables"][0]["rows"]:
    count = count + 1
    print_progress(count, total_length)

    d = {}
    if("Custom operationId" in value[4] and 'http' not in value[4]):
        switch_operation_ids.append([value[5], value[14]])
        d['operation_id'] = value[5].replace('|', '').split('.')[0]
    else:
        d['operation_id'] = value[14]

    timestamp = value[0]
    timestamp = timestamp.replace('T', ' ')
    timestamp = timestamp.replace('Z', '')
    milli = (timestamp + ".").split(".")[1] + "000"
    timestamp = timestamp.split(".")[0] + "." + milli[0:3]
    name = value[4].lower()
    if(name.startswith('post')):
        d['name'] = 'POST'
    else:
        d['name'] = name

    d['type'] = 'DEPENDENCY'
    d['timestamp'] = timestamp
    d['duration'] = value[8]
    entries.append(d)

all_entries = all_entries.append(entries, ignore_index=True)

print('')
print('Extracting Traces...')
entries = []
total_length = len(traces["tables"][0]["rows"])
count = -1

for value in traces["tables"][0]["rows"]:
    count = count + 1
    print_progress(count, total_length)
    if(value[1].lower() == "invokerendpoint details"):

        custom_values = json.loads(value[4])

        all_entries.loc[all_entries['operation_id'] == custom_values['operationId'], ['trigger', 'runtime', 'iteration_id', 'invoke_mode', 'invoke_input']] = [
            custom_values['triggerType'].lower(), custom_values['runtime'], custom_values['iterationId'], custom_values['invokeMode'], custom_values['invokeInput']]
    else:
        d = {}
        d['type'] = 'TRACE'
        d['name'] = 'cold start'
        d['timestamp'] = timestamp
        d['operation_id'] = value[7]
        entries.append(d)

all_entries = all_entries.append(entries, ignore_index=True)

# Switch operation ids if necessary
print('')
print('Setting correct operation IDs...')
total_length = len(switch_operation_ids)
count = -1
if len(switch_operation_ids) > 0:
    for switch in switch_operation_ids:
        count = count + 1
        print_progress(count, total_length)
        all_entries["operation_id"][all_entries["operation_id"] ==
                                    switch[1]] = switch[0].replace('|', '').split('.')[0]


# Remove entries without operation_id
# all_entries = all_entries.filter(
#    all_entries["operation_id"][all_entries["operation_id"] == ""])

all_entries = all_entries.sort_values(by=['operation_id'])
print('')
print("Writing data to CSV-files...")
for runtime_type in runtime_pick:
    all_entries.loc[all_entries['runtime'] == runtime_type].to_csv(
        "./../data/" + runtime_type + ".csv", index=False)
print('')
print("Finished")

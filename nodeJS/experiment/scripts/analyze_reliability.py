import requests
import json
from itertools import groupby
from datetime import datetime
import csv
import re
import os
from dotenv import load_dotenv

load_dotenv('./../../.env')

INSIGHTS_API_KEY = os.getenv('INSIGHTS_API_KEY')
INSIGHTS_APP_ID = os.getenv('INSIGHTS_APP_ID')

# EDIT THESE PARAMETERS
trigger_type = 'storage'
timespan = '2022-03-10T12:35:00Z/2022-03-11T19:00:00Z'  # Time zone GMT
# Azure Insights REST API limits to 500 rows by default, many invocations => thousands of rows. Get top 5000 rows
top = 100000
application_ID = INSIGHTS_APP_ID
api_key = INSIGHTS_API_KEY
##

headers = {'x-api-key': api_key, }
params = (('timespan', timespan), ('$top', top))

print('')
print('Fetching Requests...')
reqs = requests.get('https://api.applicationinsights.io/v1/apps/' +
                    application_ID + '/events/requests', headers=headers, params=params)
reqs = reqs.json()


print('')
print('Fetching Traces...')
traces = requests.get('https://api.applicationinsights.io/v1/apps/' +
                      application_ID + '/events/traces', headers=headers, params=params)
traces = traces.json()

invoke_order = []
execute_order = []

invoke_duplicates = []
execute_duplicates = []

print('')
print('Extracting Invoking order...')

invoke_amount = 0
for value in reqs['value']:
    name = value['customDimensions']['FullName']
    if 'InfraEndpoint' in name:
        invoke_amount = invoke_amount + 1
        timestamp = value['timestamp']
        timestamp = timestamp.replace('T', ' ')
        timestamp = timestamp.replace('Z', '')
        operation_id = value['operation']['id']
        d = {}
        d['timestamp'] = timestamp
        d['operation_id'] = operation_id
        invoke_order.append(d)

invoke_order.sort(key=lambda x: x['timestamp'])

temp_list = []

for invoke in invoke_order:
    temp_list.append(invoke['operation_id'])
invoke_order.clear()
invoke_order = temp_list.copy()

print('')
print('Extracting Executing order...')
execute_amount = 0
for value in traces['value']:
    message_whole = value['trace']['message']
    if 'Custom operationId' in message_whole:
        execute_amount = execute_amount + 1
        timestamp = value['timestamp']
        timestamp = timestamp.replace('T', ' ')
        timestamp = timestamp.replace('Z', '')
        operation_id = value['customDimensions']['newOperationId']
        execute_duplicates.append(value['customDimensions']['oldOperationId'])
        d = {}
        d['timestamp'] = timestamp
        d['operation_id'] = operation_id
        execute_order.append(d)

    if 'iterationId' in message_whole:
        invoke_duplicates.append(value['customDimensions']['iterationId'])

# Sort by timestamp, must be done before switching operation ids
execute_order.sort(key=lambda x: x['timestamp'])

temp_list.clear()
for execute in execute_order:
    temp_list.append(execute['operation_id'])
execute_order.clear()
execute_order = temp_list.copy()

invoke_duplicates_amount = 0
for invoke in invoke_duplicates:
    if 1 < invoke_order.count(invoke):
        invoke_duplicates_amount = invoke_duplicates_amount + 1

execute_duplicates_amount = 0
for execute in execute_duplicates:
    if 1 < execute_order.count(execute):
        execute_duplicates_amount = execute_duplicates_amount + 1

missing_executes = []

for invoke in invoke_order:
    if invoke not in execute_order:
        missing_executes.append(invoke)

for value in missing_executes:
    while(value in invoke_order):
        invoke_order.remove(value)


count = -1
out_of_order = 0
for invoke in invoke_order:
    count = count + 1
    if invoke != execute_order[count]:
        out_of_order = out_of_order + 1
        if invoke in execute_order:
            execute_order.remove(invoke)
            execute_order.insert(count, invoke)

print('')
print('## RESULTS ##')
print('')
print('Original amount of invokes: ' + str(invoke_amount))
print('Original amount of executes: ' + str(execute_amount))
print('')
print('Contains Duplicates')
print('Invoke: ' + str(invoke_duplicates_amount))
print('Execute: ' + str(execute_duplicates_amount))
print('')
print('Missing executes: ' + str(len(missing_executes)))
print('')
print('')
print('Amount of invokes: ' + str(len(invoke_order)))
print('Amount of executes: ' + str(len(execute_order)))
print('')
print('Out of order: ' + str(out_of_order))
print('')
with open("./../results/reliability/" + trigger_type + '.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["trigger_type", "original_invokes", "original_executes", "duplicates_invokes",
                    "duplicates_executes", "missing_executes", "out_of_order", "amount_invokes_after", "amount_executes_after"])
    writer.writerow([trigger_type, invoke_amount, execute_amount, invoke_duplicates_amount,
                    execute_duplicates_amount, len(missing_executes), out_of_order, len(invoke_order), len(execute_order)])

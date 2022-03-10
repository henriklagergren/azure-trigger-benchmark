import requests
import json
from itertools import groupby
from datetime import datetime
import csv
import re
import os
from dotenv import load_dotenv

load_dotenv('./../.env')

INSIGHTS_API_KEY = os.getenv('INSIGHTS_API_KEY')
INSIGHTS_APP_ID = os.getenv('INSIGHTS_APP_ID')

# EDIT THESE PARAMETERS
trigger_type = 'storage'
timespan = '2022-03-09T13:45:00Z/2022-03-10T19:00:00Z'  # Time zone GMT
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


print('')
print('Extracting Invoking order...')

for value in reqs['value']:
    name = value['customDimensions']['FullName']
    if 'InfraEndpoint' in name:
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
for value in traces['value']:
    message_whole = value['trace']['message']
    if 'Custom operationId' in message_whole:
        timestamp = value['timestamp']
        timestamp = timestamp.replace('T', ' ')
        timestamp = timestamp.replace('Z', '')
        operation_id = value['customDimensions']['newOperationId']
        d = {}
        d['timestamp'] = timestamp
        d['operation_id'] = operation_id
        execute_order.append(d)


# Sort by timestamp, must be done before switching operation ids
execute_order.sort(key=lambda x: x['timestamp'])

temp_list.clear()
for execute in execute_order:
    temp_list.append(execute['operation_id'])
execute_order.clear()
execute_order = temp_list.copy()

order_result = []

invoke_duplicates = 0
for invoke in invoke_order:
    if 1 < invoke_order.count(invoke):
        invoke_duplicates = invoke_duplicates + 1

execute_duplicates = 0
for execute in execute_order:
    if 1 < execute_order.count(execute):
        execute_duplicates = execute_duplicates + 1

missing_executes = 0

for invoke in invoke_order:
    if invoke not in execute_order:
        missing_executes = missing_executes + 1
        invoke_order.remove(invoke)

count = -1
for invoke in invoke_order:
    count = count + 1
    order_result.append(count - execute_order.index(invoke))

print('')
print('## RESULTS ##')
print('')
print('Amount of invokes: ' + str(len(invoke_order)))
print('Amount of executes: ' + str(len(execute_order)))
print('')
print('Contains Duplicatess')
print('Invoke:' + str(invoke_duplicates))
print('Execute:' + str(execute_duplicates))
print('')
print('Missing executes')
print(missing_executes)
print('')


#

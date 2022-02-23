import requests
import json
from itertools import groupby
from datetime import datetime
import csv
import re

# EDIT THESE PARAMETERS
trigger_type ='database'
timespan = '2022-02-23T15:34:00Z/2022-02-24T22:50:00Z' # Time zone GMT
# Azure Insights REST API limits to 500 rows by default, many invocations => thousands of rows. Get top 5000 rows
top = 5000
application_ID = 'd3aeeeeb-e8f9-41c4-bf19-a838df745bb9'
api_key = 'dw8g2lvrzmxxicu23petdfm1fer0j1nukipmhhlz'
##

headers = {'x-api-key': api_key,}
params = (('timespan', timespan),('$top', top))

print('')
print('Fetching Requests...')
reqs = requests.get('https://api.applicationinsights.io/v1/apps/' + application_ID + '/events/requests', headers=headers, params=params)
reqs = reqs.json()


print('')
print('Fetching Dependencies...')
dependencies = requests.get('https://api.applicationinsights.io/v1/apps/' + application_ID + '/events/dependencies', headers=headers, params=params)
dependencies = dependencies.json()

params = (('timespan', timespan),('$filter', 'contains(trace/message, \'exec\') or contains(trace/message, \'custom\')'),('$top', top))

print('')
print('Fetching Traces...')
traces = requests.get('https://api.applicationinsights.io/v1/apps/' + application_ID + '/events/traces', headers=headers, params=params)
traces = traces.json()

all_entries = []
switch_operation_ids = []

print('')
print('Extracting Requests...')

for value in reqs['value']:
    timestamp = value['timestamp']
    timestamp = timestamp.replace('T', ' ')
    timestamp = timestamp.replace('Z', '')
    name = value['customDimensions']['FullName']
    operation_id = value['operation']['id']
    d = {}
    d['type'] = 'REQUEST'
    d['name'] = name
    d['timestamp'] = timestamp
    d['operation_id'] = operation_id
    all_entries.append(d)

print('')
print('Extracting Dependencies...')
for value in dependencies['value']:
    timestamp = value['timestamp']
    timestamp = timestamp.replace('T', ' ')
    timestamp = timestamp.replace('Z', '')
    name = value['dependency']['name']
    operation_id = value['operation']['id']
    if(name.startswith('POST')):
        name = 'POST'
    d = {}
    d['type'] = 'DEPENDENCY'
    d['name'] = name
    d['timestamp'] = timestamp
    d['operation_id'] = operation_id
    all_entries.append(d)

print('')
print('Extracting Traces...')
for value in traces['value']:
    message_whole = value['trace']['message']
    if 'Custom operationId' in message_whole:
        # Get operation ids that should be switched
        switch_operation_ids.append(value['customDimensions'])
    else:
        message_list = message_whole.split(' ')
        message = message_list[0] + ' ' + message_list[1]
        timestamp = value['timestamp']
        timestamp = timestamp.replace('T', ' ')
        timestamp = timestamp.replace('Z', '')
        operation_id = value['operation']['id']
        d = {}
        d['type'] = 'TRACE'
        d['name'] = message
        d['timestamp'] = timestamp
        d['operation_id'] = operation_id
        all_entries.append(d)

# Sort by timestamp, must be done before switching operation ids
all_entries.sort(key=lambda x:x['timestamp'])

# Switch operation ids if necessary
print('')
print('Setting correct operation IDs...')

if len(switch_operation_ids) > 0:
    for entry in all_entries:
        for switch in switch_operation_ids:
            if entry['operation_id'] == switch['oldOperationId'] and switch['newOperationId'] != '':
                entry['operation_id'] = switch['newOperationId']


# Remove entries without operation_id
filtered_entries = all_entries.copy()
for entry in filtered_entries:
    if entry['operation_id'] == '':
        filtered_entries.remove(entry)

all_entries = filtered_entries



dash = '-' * 119

# Sort by operation_id before grouping
all_entries.sort(key=lambda x:x['operation_id'])

print('')
print('Partitioning groups...')

all_groups = []
saved_id = None
index = -1

for entry in all_entries:
    if saved_id != entry['operation_id']:
        index += 1
        all_groups.append([])
        all_groups[index].append(entry)
        saved_id = entry['operation_id']
    elif saved_id == entry['operation_id']:
        all_groups[index].append(entry)

print('')
print('Checking the validity of traces...')

all_valid_groups = []

for group in all_groups:
    trace_amount = 0
    request_amount = 0
    dependency_amount = 0
    for entry in group:
        if entry['type'] == 'TRACE':
            trace_amount += 1
            print(f"{trace_amount} - Trace")
        elif entry['type'] == 'REQUEST':
            request_amount += 1
            print(f"{request_amount} - request")
        elif entry['type'] == 'DEPENDENCY':
            dependency_amount += 1
            print(f"{dependency_amount} - dependency")
    if trace_amount == 4 and request_amount == 2 and dependency_amount >= 1: # How do we know the "valid" amount of trace/request/dependency.
        all_valid_groups.append(group)
    else:
        print('Group with id ' +
              str(group[0]['operation_id']) + ' was thrown out...')

all_groups = all_valid_groups

print('')
print('Checks completed')


all_trigger_delays_ms = []

for group in all_groups:
    dependency_timestamp = datetime.now()
    request_timestamp = datetime.now()
    for entry in group:
        if entry['type'] == 'DEPENDENCY':
            dependency_timestamp = datetime.strptime(
                entry['timestamp']+'000', '%Y-%m-%d %H:%M:%S.%f')
        elif entry['type'] == 'REQUEST' and entry['name'] != 'Functions.InfraEndpoint':
            request_timestamp = datetime.strptime(
                entry['timestamp']+'000', '%Y-%m-%d %H:%M:%S.%f')

    delta = request_timestamp - dependency_timestamp
    all_trigger_delays_ms.append(
        (delta.seconds*1000000 + delta.microseconds) / 1000)

print('')
print('## RESULTS ##')
print('')
print(all_trigger_delays_ms)
print('')
print('Average: ' + str(sum(all_trigger_delays_ms) /
      max(1, len(all_trigger_delays_ms))) + ' ms')
print('')
print('Number of valid entries: ' + str(len(all_trigger_delays_ms)))
print('')


# csvFile = str(str(datetime.strptime(str(datetime.now()),
#               '%Y-%m-%d %H:%M:%S.%f')).split('.')[0])
# csvFile = re.sub(' ', '_', csvFile)
# csvFile = re.sub(':', '-', csvFile)
# with open(trigger_type + '-' + csvFile + '.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     writer.writerow(['Trigger type: ' + trigger_type])
#     writer.writerow(['Traces: ' + str(len(all_trigger_delays_ms))])
#     writer.writerow([' '])
#     writer.writerow(['Measured latencies:'])
#     for value in all_trigger_delays_ms:
#         writer.writerow([value])
        

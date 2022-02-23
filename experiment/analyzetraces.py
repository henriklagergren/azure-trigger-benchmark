import requests
import json
from itertools import groupby
from datetime import datetime
import csv
import re

# EDIT THESE PARAMETERS
trigger_type = 'storage'
timespan = '2022-02-20T21:00:00Z/2022-02-23T19:00:00Z'
# Azure Insights REST API limits to 500 rows by default, many invocations => thousands of rows. Get top 5000 rows
top = 10000
application_ID = 'ea608af4-552d-4fd1-82d7-bdd42fe07f1c'
api_key = 'qygk8a02wf6bq5kjri3iz4erx5lwlcvvwninjnj7'
##

headers = {'x-api-key': api_key, }
params = (('timespan', timespan), ('$top', top))

print('')
print('Fetching Requests...')
reqs = requests.get('https://api.applicationinsights.io/v1/apps/' +
                    application_ID + '/events/requests', headers=headers, params=params)
reqs = reqs.json()


print('')
print('Fetching Dependencies...')
dependencies = requests.get('https://api.applicationinsights.io/v1/apps/' +
                            application_ID + '/events/dependencies', headers=headers, params=params)
dependencies = dependencies.json()

params = (('timespan', timespan), ('$filter',
          'contains(trace/message, \'exec\') or contains(trace/message, \'custom\')'), ('$top', top))

print('')
print('Fetching Traces...')
traces = requests.get('https://api.applicationinsights.io/v1/apps/' +
                      application_ID + '/events/traces', headers=headers, params=params)
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
    d['duration'] = value['dependency']['duration']
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
all_entries.sort(key=lambda x: x['timestamp'])

# Switch operation ids if necessary
print('')
print('Setting correct operation IDs...')

if len(switch_operation_ids) > 0:
    for entry in all_entries:
        for switch in switch_operation_ids:
            if entry['operation_id'] == switch['oldOperationId']:
                entry['operation_id'] = (
                    switch['newOperationId'].replace('|', '').split('.')[0])


# Remove entries without operation_id
filtered_entries = all_entries.copy()
for entry in filtered_entries:
    if entry['operation_id'] == '':
        filtered_entries.remove(entry)

all_entries = filtered_entries

dash = '-' * 119

# Sort by operation_id before grouping
all_entries.sort(key=lambda x: x['operation_id'])

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
        elif entry['type'] == 'REQUEST':
            request_amount += 1
        elif entry['type'] == 'DEPENDENCY':
            dependency_amount += 1

    if(trigger_type == "http"):
        isValid = (trace_amount == 4 and request_amount ==
                   2 and dependency_amount == 2)
    elif(trigger_type == "storage"):
        isValid = (trace_amount == 4 and request_amount ==
                   2 and dependency_amount == 9)

    if isValid:
        all_valid_groups.append(group)
    else:
        print('Group with id ' +
              str(group[0]['operation_id']) + ' was thrown out...')

all_groups = all_valid_groups

print('')
print('Checks completed')


all_trigger_delays_ms = []
all_completion_tracks = []

for group in all_groups:
    dependency_timestamp = datetime.now()
    request_timestamp = datetime.now()
    for entry in group:
        if entry['name'] == ('CompletionTrack' + trigger_type.capitalize()):
            all_completion_tracks.append(entry['duration'])
        elif entry['type'] == 'DEPENDENCY':
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
print('Completion tracks')
print(all_completion_tracks)
print('')
print('Average: ' + str(sum(all_completion_tracks) /
      max(1, len(all_completion_tracks))) + ' ms')
print('')
print('Number of valid entries: ' + str(len(all_trigger_delays_ms)))
print('')

csvFile = str(str(datetime.strptime(str(datetime.now()),
                                    '%Y-%m-%d %H:%M:%S.%f')).split('.')[0])
csvFile = re.sub(' ', '_', csvFile)
csvFile = re.sub(':', '-', csvFile)
with open(trigger_type + '.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["trigger_type", "latency"])
    count = 0
    for value in all_trigger_delays_ms:
        writer.writerow([trigger_type, value])
        count = count + 1

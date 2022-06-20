# Azure Trigger Benchmark (2022)

#### An Azure benchmark for FaaS triggers, built as a part of a master thesis conducted at Chalmers University of Technology in Sweden.

## Intructions to reproduce experiment:

1. Installation
   - Pulumi CLI (https://www.pulumi.com/docs/get-started/install/)
   - Azure CLI (https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
   - Azure Functions Core Tools (https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
   - NodeJS (https://nodejs.org/en/download/)
   - .NET (https://dotnet.microsoft.com/en-us/download)

2. Create accounts
   - Pulumi (https://app.pulumi.com/signin)
   - Azure Portal (https://azure.microsoft.com/en-us/free/)
     - Note: If you are a student, do not create a student account since the account will be restricted and will not have administrative privileges. Instead, create a regular one and then apply for free credits.

3. Clone this repository and open it up.
   - Authors used VS code.

4. Login in by running `pulumi login` and `az login` in the terminal.

5. Initialization:
   - Run the shell-file `(bash) init.sh` to install all packages in the relevant folders.

6. Run Experiment:
   - Navigate to experiment folder
   - workload/k6.js contains the experiment workload profile
   - Run the command `(bash) run_benchmark.sh --t **trigger_type** --r **runtime** --l **location**` to start running the experiment.
     - -t: _all_, _database_, _eventGrid_, _eventHub_, _http_, _queue_, _serviceBus_, _storage_
     - -r: _node_, _dotnet_
       - If nothing specified: _node_
     - -l: _northeurope_, _eastus_
       - If nothing specified: _northeurope_
   - NOTE: First time deploying the resources will take approx. 10 minutes.

7. Fetch Data:
   - Navigate to data_scripts folder
   - Locate the fetch_traces.py script
      - Go to row 26-30 in the file and change the interval of which traces that should be collected i.e. start and end time/date.
   - Run the command from bash `python3 fetch_traces.`
   - Generated data is found in experiment -> raw_data

8. Analyze Scripts:
   - Navigate to the data_scripts folder
   - Run the command `python3 analyze_latency.py` will output the measured latency.
   - Run the command `python3 analyze_reliability.py` will output the frequency of out-of-order, missed or duplicate event deliveries.
   - **Note:** It may take up to 4-6 minutes for the data to be available for retrieval after manual invocations or running the experiment.
   - Generated data is found in experiment -> results -> latency/reliability

(9). Plot Scripts:
   - Two plot scripts are located in data_scripts folder: `plot_latency.py` and `plot_reliability.py`
   - These scripts will generate different plots (that were used in the master thesis based) on the results in the result folder.
   - Generated plots are found in experiment -> results -> latency/reliability -> plots

10. Finish by Remove All Published Resources:
   - Run the command from root folder `(bash) destroy.sh -t **trigger_type**`
   - NOTE: This also removes all insights data in the portal.
 

If you want to deploy a trigger without running the experiment:
   - Run the shell-file `(bash) deploy.sh --t **trigger_type** --r **runtime** --l **location**` to create all necessary resources in azure.
     - -t: _database_, _eventGrid_, _eventHub_, _http_, _queue_, _serviceBus_, _storage_
     - -r: _node_, _dotnet_
       - If nothing specified: _node_
     - -l: _northeurope_, _eastus_
       - If nothing specified: _northeurope_
   - NOTE: First time deploying the resources will take approx. 10 minutes.

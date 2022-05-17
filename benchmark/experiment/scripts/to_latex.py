import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os

latency_results = pd.read_csv(
    './../results/latency/results.csv', delimiter=",")

latex_results = pd.DataFrame(
    columns=["Runtime", "Trigger type", "Workload type", "Workload input", "Sample size", "Latency"])

latency_runtime_groups = latency_results.groupby('runtime')

for runtime, runtime_group in latency_runtime_groups:

    latency_trigger_groups = runtime_group.groupby('trigger_type')

    for trigger_type, invoke_type_group in latency_trigger_groups:

        latency_invoke_type_groups = invoke_type_group.groupby('invoke_type')

        for invoke_type, invoke_type_group in latency_invoke_type_groups:

            latency_invoke_input_groups = invoke_type_group.groupby(
                'invoke_input')

            for invoke_input, invoke_input_group in latency_invoke_input_groups:

                if(runtime == "dotnet"):
                    runtime = ".NET"
                elif(runtime == "node"):
                    runtime = "Node.js"

                if(trigger_type == "http"):
                    trigger_type = "HTTP"
                elif(trigger_type == "storage"):
                    trigger_type = "Blob Storage"
                elif(trigger_type == "queue"):
                    trigger_type = "Queue Storage"
                elif(trigger_type == "database"):
                    trigger_type = "Cosmos DB"
                elif(trigger_type == "servicebustopic"):
                    trigger_type = "Service Bus Topic"
                elif(trigger_type == "eventhub"):
                    trigger_type = "Event Hub"
                elif(trigger_type == "eventgrid"):
                    trigger_type = "Event Grid"

                if(invoke_type == "constant"):
                    invoke_type_new = "Inter-arrival time"
                    invoke_input = str(invoke_input) + "ms"
                elif(invoke_type == "burst"):
                    invoke_type_new = "Burst size"
                    invoke_input = str(invoke_input) + " invocations"

                latex_results = latex_results.append({"Runtime": runtime, "Trigger type": trigger_type, "Workload type": invoke_type_new,
                                                      "Workload input": str(invoke_input), "Sample size": len(invoke_input_group.index),  "Latency": "{:.0f}".format(invoke_input_group['latency'].sum()/len(invoke_input_group.index)) + "ms"}, ignore_index=True)


latex_results.to_csv("./../results/latency/results-to-latex.csv", index=False)
latex_results.to_latex(
    "./../results/latency/results-to-latex.txt", index=False, longtable=True)


reliability_results = pd.read_csv(
    './../results/reliability/results.csv', delimiter=",")

reliability_results.reindex(columns=["runtime", "trigger_type", "invoke_type", "invoke_input",
                            "original_invokes", "original_executes", "duplicates_executes", "missing_executes", "out_of_order"])

reliability_results.loc[reliability_results["runtime"]
                        == "dotnet", 'runtime'] = ".NET"

reliability_results.loc[reliability_results["runtime"]
                        == "node", 'runtime'] = "Node.js"

reliability_results.loc[reliability_results["invoke_type"]
                        == "constant", 'invoke_type'] = "Inver-arrival time"

reliability_results.loc[reliability_results["invoke_type"]
                        == "burst", 'invoke_type'] = "Burst size"

reliability_results.loc[reliability_results["invoke_type"]
                        == "burst", 'invoke_type'] = "Burst size"

reliability_results.loc[reliability_results["trigger_type"]
                        == "http", 'trigger_type'] = "HTTP"

reliability_results.loc[reliability_results["trigger_type"]
                        == "storage", 'trigger_type'] = "Blob Storage"

reliability_results.loc[reliability_results["trigger_type"]
                        == "queue", 'trigger_type'] = "Queue Storage"

reliability_results.loc[reliability_results["trigger_type"]
                        == "database", 'trigger_type'] = "Cosmos DB"

reliability_results.loc[reliability_results["trigger_type"]
                        == "servicebustopic", 'trigger_type'] = "Service Bus Topic"

reliability_results.loc[reliability_results["trigger_type"]
                        == "eventhub", 'trigger_type'] = "Event Hub"

reliability_results.loc[reliability_results["trigger_type"]
                        == "eventgrid", 'trigger_type'] = "Event Grid"


reliability_results.rename(columns={"runtime": "Runtime", "trigger_type": "Trigger type", "invoke_type": "Workload type", "invoke_input": "Workload input",
                                    "original_invokes": "Invokes", "original_executes": "Executes", "duplicates_executes": "Duplicate executes", "missing_executes": "Missing executes", "out_of_order": "Out of order"}, inplace=True)

reliability_results.to_csv(
    "./../results/reliability/results-to-latex.csv", columns=["Runtime", "Trigger type", "Workload type", "Workload input",
                                                              "Invokes", "Executes", "Duplicate executes", "Missing executes", "Out of order"], index=False)

reliability_results = pd.read_csv(
    './../results/reliability/results-to-latex.csv', delimiter=",")
reliability_results.to_latex(
    "./../results/reliability/results-to-latex.txt", index=False, longtable=True)

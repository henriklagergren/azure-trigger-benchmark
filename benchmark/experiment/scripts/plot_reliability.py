import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


def format_labels(breaks):
    return [str(l) + "ms" for l in breaks]


def format_label_name(breaks):
    new_breaks = []
    print(breaks)
    for name in breaks:
        if(name == "http" or name == "storage" or name == "queue" or name == "database"):
            new_breaks.append(name.capitalize())
        elif(name == "servicebustopic"):
            new_breaks.append("Service Bus Topic")
        elif(name == "eventhub"):
            new_breaks.append("Event Hub")
        elif(name == "eventgrid"):
            new_breaks.append("Event Grid")

    return new_breaks


reliability_results = pd.read_csv(
    './../results/reliability/results.csv', delimiter=",")

reliability_runtime_groups = reliability_results.groupby('runtime')

for runtime, runtime_group in reliability_runtime_groups:
    print(str(runtime))

    reliability_invoke_type_groups = runtime_group.groupby('invoke_type')

    for invoke_type, invoke_type_group in reliability_invoke_type_groups:
        print(str(invoke_type))

        test = pd.DataFrame(pd.DataFrame(columns=["runtime", "trigger_type", "original_invokes", "original_executes", "duplicates_invokes",
                                                  "duplicates_executes", "missing_executes", "out_of_order", "invoke_type", "invoke_input"]))

        reliability_invoke_input_groups = invoke_type_group.groupby(
            'invoke_input')

        if(invoke_type == "burst"):
            legend_title = "Burst Size"
        else:
            legend_title = "Iteration delay"

        for invoke_input, invoke_input_group in reliability_invoke_input_groups:
            print(str(invoke_input))
            invoke_input_group['missing_executes'] = invoke_input_group['missing_executes'] / \
                invoke_input_group['original_invokes']

            invoke_input_group['duplicates_executes'] = invoke_input_group['duplicates_executes'] / \
                invoke_input_group['original_executes']

            invoke_input_group['out_of_order'] = invoke_input_group['out_of_order'] / \
                (invoke_input_group['original_executes'] -
                 invoke_input_group['duplicates_executes'])

            test = pd.concat([test, invoke_input_group],
                             ignore_index=True, axis=0)

        test = test.astype({"invoke_input": 'category'}, errors='raise')

        plot = (p9.ggplot(test, p9.aes(fill="invoke_input",
                                       x="trigger_type", y="missing_executes")) + p9.labs(title="Bar plot - Missing executes - " + str(invoke_type), x="Trigger type", y="Percent")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_bar(stat="identity", position="dodge") + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_missing_executes_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

        plot = (p9.ggplot(test, p9.aes(fill="invoke_input",
                                       x="trigger_type", y="duplicates_executes")) + p9.labs(title="Bar plot - Duplicates executes - " + str(invoke_type), x="Trigger type", y="Percent")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_bar(stat="identity", position="dodge") + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_duplicates_executes_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

        plot = (p9.ggplot(test, p9.aes(fill="invoke_input", x="trigger_type", y="out_of_order")) + p9.labs(title="Bar plot - Out of order - " + str(invoke_type), x="Trigger type", y="Percent", color="Trigger Type")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_bar(stat="identity", position="dodge") + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_out_of_order_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

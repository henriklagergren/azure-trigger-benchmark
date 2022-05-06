import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


def format_labels(breaks):
    return ["{:.0f}".format(l) for l in breaks]


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

    reliability_invoke_type_groups = reliability_results.groupby('invoke_type')

    for invoke_type, invoke_type_group in reliability_invoke_type_groups:

        reliability_invoke_input_groups = invoke_type_group.groupby(
            'invoke_input')

        for invoke_input, invoke_input_group in reliability_invoke_input_groups:
            invoke_input_group['missing_executes'] = invoke_input_group['missing_executes'] / \
                invoke_input_group['original_invokes']

            invoke_input_group['duplicates_executes'] = invoke_input_group['duplicates_executes'] / \
                invoke_input_group['original_executes']

            invoke_input_group['out_of_order'] = invoke_input_group['out_of_order'] / \
                (invoke_input_group['original_executes'] -
                 invoke_input_group['duplicates_executes'])

            plot = (p9.ggplot(invoke_input_group, p9.aes(
                x="trigger_type", y="missing_executes")) + p9.labs(title="Box plot - Missing executes", x="Trigger type", y="")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_col())

            p9.save_as_pdf_pages(
                [plot], filename="./../results/reliability/plots/reliability_missing_executes_" + str(runtime) + "_" +
                str(invoke_type) + "_" + str(invoke_input) + ".pdf")

            plot = (p9.ggplot(invoke_input_group, p9.aes(
                x="trigger_type", y="duplicates_executes")) + p9.labs(title="Box plot - Duplicates executes", x="Trigger type", y="")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_col())

            p9.save_as_pdf_pages(
                [plot], filename="./../results/reliability/plots/reliability_duplicates_executes_" + str(runtime) + "_" +
                str(invoke_type) + "_" + str(invoke_input) + ".pdf")

            plot = (p9.ggplot(invoke_input_group, p9.aes(
                x="trigger_type", y="out_of_order")) + p9.labs(title="Box plot - Out of order", x="Trigger type", y="")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1)) + p9.geom_col())

            p9.save_as_pdf_pages(
                [plot], filename="./../results/reliability/plots/reliability_out_of_order_" + str(runtime) + "_" +
                str(invoke_type) + "_" + str(invoke_input) + ".pdf")

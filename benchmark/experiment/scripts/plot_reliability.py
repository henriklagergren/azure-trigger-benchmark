import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


def format_label_name(breaks):
    new_breaks = []
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

    reliability_invoke_type_groups = runtime_group.groupby('invoke_type')

    for invoke_type, invoke_type_group in reliability_invoke_type_groups:

        def format_labels(breaks):
            if(invoke_type == "constant"):
                return [str(l) + " ms" for l in breaks]
            else:
                return [str(l) + " invocations" for l in breaks]

        current_row = pd.DataFrame(pd.DataFrame(columns=["runtime", "trigger_type", "original_invokes", "original_executes", "duplicates_invokes",
                                                         "duplicates_executes", "missing_executes", "out_of_order", "invoke_type", "invoke_input"]))

        reliability_invoke_input_groups = invoke_type_group.groupby(
            'invoke_input')

        if(invoke_type == "burst"):
            legend_title = "Burst Size"
        else:
            legend_title = "Invocation delay"

        for invoke_input, invoke_input_group in reliability_invoke_input_groups:

            invoke_input_group['missing_executes'] = invoke_input_group['missing_executes'] / \
                invoke_input_group['original_invokes']

            invoke_input_group['duplicates_executes'] = invoke_input_group['duplicates_executes'] / \
                invoke_input_group['original_executes']

            invoke_input_group['out_of_order'] = invoke_input_group['out_of_order'] / \
                (invoke_input_group['original_executes'] -
                 invoke_input_group['duplicates_executes'])

            current_row = pd.concat([current_row, invoke_input_group],
                                    ignore_index=True, axis=0)

        current_row = current_row.astype(
            {"invoke_input": 'category'}, errors='raise')

        plot = (p9.ggplot(current_row, p9.aes(fill="invoke_input",
                                              x="trigger_type", y="missing_executes")) + p9.ylim(0, 1) + p9.labs(title="", x="Trigger type", y="")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1), legend_position="top") + p9.geom_col(position="dodge") + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title) + p9.scale_fill_brewer(type="seq",  palette="YlGnBu", direction=-1, labels=format_labels))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_missing_executes_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

        plot = (p9.ggplot(current_row, p9.aes(fill="invoke_input",
                                              x="trigger_type", y="duplicates_executes")) + p9.ylim(0, 1) + p9.labs(title="", x="Trigger type", y="")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1), legend_position="top") + p9.geom_col(position="dodge") + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title) + p9.scale_fill_brewer(type="seq",  palette="YlGnBu", direction=-1, labels=format_labels))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_duplicates_executes_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

        plot = (p9.ggplot(current_row, p9.aes(fill="invoke_input", x="trigger_type", y="out_of_order")) + p9.ylim(0, 1) + p9.labs(title="", x="Trigger type", y="", color="Trigger Type")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1), legend_position="top") + p9.geom_col(position=p9.position_dodge(0.8), width=0.8) + p9.scale_x_discrete(labels=format_label_name) + p9.labs(fill=legend_title) + p9.scale_fill_brewer(type="seq",  palette="YlGnBu", direction=-1, labels=format_labels))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/reliability/plots/reliability_out_of_order_" + str(runtime) + "_" +
            str(invoke_type) + ".pdf")

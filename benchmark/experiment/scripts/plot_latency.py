import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


def format_labels(breaks):
    return ["{:.0f}".format(l) for l in breaks]


def format_names(breaks):
    new_breaks = []
    for name in breaks:
        if(name == "dotnet"):
            new_breaks.append(".NET")
        else:
            new_breaks.append(name.capitalize())
    return new_breaks


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


latency_results = pd.read_csv(
    './../results/latency/results.csv', delimiter=",")

latency_runtime_groups = latency_results.groupby('runtime')

for runtime, runtime_group in latency_runtime_groups:

    latency_invoke_type_groups = runtime_group.groupby('invoke_type')

    for invoke_type, invoke_type_group in latency_invoke_type_groups:

        latency_invoke_input_groups = invoke_type_group.groupby('invoke_input')

        for invoke_input, invoke_input_group in latency_invoke_input_groups:

            plot = (p9.ggplot(invoke_input_group, p9.aes(x='latency', col='trigger_type', colour='trigger_type')) + p9.labs(title="", y="", x="Duration Time (milliseconds)", color="Trigger Type")
                    + p9.theme(legend_position="top") + p9.stat_ecdf(geom="line", alpha=0.9, size=0.7) + p9.scale_x_log10(labels=format_labels) + p9.scale_color_brewer(type="qual",  palette="Set1", labels=format_label_name))

            p9.save_as_pdf_pages(
                [plot], filename="./../results/latency/plots/cdf/latency_cdf_" + str(runtime) + "_" +
                str(invoke_type) + "_" + str(invoke_input) + ".pdf")


latency_invoke_type_groups = latency_results.groupby('invoke_type')

for invoke_type, invoke_type_group in latency_invoke_type_groups:

    latency_invoke_input_groups = invoke_type_group.groupby('invoke_input')

    for invoke_input, invoke_input_group in latency_invoke_input_groups:

        invoke_input_group.rename(columns={'runtime': 'Runtime'}, inplace=True)

        plot = (p9.ggplot(invoke_input_group, p9.aes(fill="Runtime",
                                                     x="trigger_type", y="latency")) + p9.labs(title="", x="Trigger Type", y="Latency (milliseconds)")
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1), legend_position="top") + p9.geom_violin(position=p9.position_dodge(1), width=1) + p9.scale_y_log10(labels=format_labels) + p9.scale_x_discrete(labels=format_label_name) + p9.scale_fill_brewer(type="seq",  palette="YlGnBu", direction=-1, labels=format_names) + p9.stat_summary(fun_data="mean_cl_normal", geom="point", position=p9.position_dodge(1)))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/latency/plots/violin/latency_violin_" +
            str(invoke_type) + "_" + str(invoke_input) + ".pdf")

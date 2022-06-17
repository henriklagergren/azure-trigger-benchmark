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
        elif(name == "node"):
            new_breaks.append("Node.js")
    return new_breaks


def format_label_name(breaks):
    print(breaks)
    new_breaks = []
    for name in breaks:
        if(name == "http"):
            new_breaks.append("HTTP")
        elif(name == "storage"):
            new_breaks.append("Blob Storage")
        elif(name == "queue"):
            new_breaks.append("Queue Storage")
        elif(name == "database"):
            new_breaks.append("Cosmos DB")
        elif(name == "servicebustopic"):
            new_breaks.append("Service Bus Topic")
        elif(name == "eventhub"):
            new_breaks.append("Event Hub")
        elif(name == "eventgrid"):
            new_breaks.append("Event Grid")

    return new_breaks


def format_label_name_all(breaks):
    if(breaks == "http"):
        return "HTTP"
    elif(breaks == "storage"):
        return "Blob Storage"
    elif(breaks == "queue"):
        return "Queue Storage"
    elif(breaks == "database"):
        return "Cosmos DB"
    elif(breaks == "servicebustopic"):
        return "Service Bus Topic"
    elif(breaks == "eventhub"):
        return "Event Hub"
    elif(breaks == "eventgrid"):
        return "Event Grid"


latency_results = pd.read_csv(
    './../results/latency/results-old.csv', delimiter=",")

latency_runtime_groups = latency_results.groupby('runtime')

for runtime, runtime_group in latency_runtime_groups:

    latency_invoke_type_groups = runtime_group.groupby('invoke_type')

    for invoke_type, invoke_type_group in latency_invoke_type_groups:

        def format_labels_type(breaks):
            if(invoke_type == "constant"):
                return [str(l) + " ms" for l in breaks]
            else:
                return [str(l) + " invocations" for l in breaks]

        if(invoke_type == "burst"):
            legend_title = "Burst Size"
        else:
            legend_title = "Inter-arrival time"

        invoke_type_group = invoke_type_group.astype(
            {"invoke_input": 'category'}, errors='raise')

        plot = (p9.ggplot(invoke_type_group, p9.aes(x='latency', fill='invoke_input', colour='invoke_input')) + p9.labs(title="", y="CDF", x="Duration Time (milliseconds)")
                + p9.theme(legend_position="top", plot_margin=0)
                + p9.stat_ecdf(geom="line", alpha=0.9, size=0.7)
                + p9.labs(fill=legend_title, colour=legend_title)
                + p9.scale_x_log10(labels=format_labels)
                + p9.scale_color_brewer(type="qual",
                                        palette="Set1", labels=format_labels_type)
                + p9.facet_wrap('trigger_type', nrow=4,
                                labeller=format_label_name_all)
                )

        p9.save_as_pdf_pages(
            [plot], filename="./../results/latency/plots/cdf/latency_cdf_all_" +
            str(runtime) + "_"
            + str(invoke_type) + ".pdf")


baseline = latency_results[((latency_results['invoke_type'] == 'burst') & (latency_results['invoke_input'] == 1)) |
                           ((latency_results['invoke_type'] == 'constant') & (latency_results['invoke_input'] == 250))]


def format_title(title):
    if(title == '1'):
        return "1 invocation per burst"
    else:
        return "IAT with 250ms"


baseline.rename(columns={'runtime': 'Runtime'}, inplace=True)


plot = (p9.ggplot(baseline, p9.aes(fill="Runtime",
                                   x="trigger_type", y="latency"))
        + p9.labs(title="", x="Trigger Type", y="Latency (milliseconds)")
        + p9.theme(axis_text_x=p9.element_text(angle=45,
                                               hjust=1), legend_position="top")
        + p9.geom_violin(position=p9.position_dodge(1), width=1)
        + p9.scale_y_log10(labels=format_labels)
        + p9.scale_x_discrete(labels=format_label_name)
        + p9.scale_fill_brewer(type="seq",  palette="YlGnBu",
                               direction=-1, labels=format_names)
        + p9.stat_summary(fun_data="mean_cl_boot", show_legend=False,
                          size=0.2, width=0.5, geom="crossbar", color='gray',
                          position=p9.position_dodge(1))
        + p9.facet_wrap('invoke_input', nrow=1, labeller=format_title))

p9.save_as_pdf_pages(
    [plot], filename="./../results/latency/plots/violin/latency_violin_baseline.pdf")


latency_invoke_type_groups = latency_results.groupby('invoke_type')

for invoke_type, invoke_type_group in latency_invoke_type_groups:

    invoke_type_group.rename(columns={'runtime': 'Runtime'}, inplace=True)

    if(invoke_type == "burst"):
        invoke_type_group = invoke_type_group[(invoke_type_group['invoke_input'] == 1) | (
            invoke_type_group['invoke_input'] == 300)]
        rows = 1

        def format_title(title):
            return title + " invocations per burst"

    elif(invoke_type == "constant"):
        invoke_type_group = invoke_type_group[(invoke_type_group['invoke_input'] == 250) | (
            invoke_type_group['invoke_input'] == 1)]
        rows = 1

        def format_title(title):
            return "IAT with " + title + "ms"

    plot = (p9.ggplot(invoke_type_group, p9.aes(fill="Runtime",
                                                x="trigger_type", y="latency"))
            + p9.labs(title="", x="Trigger Type", y="Latency (milliseconds)")
            + p9.theme(axis_text_x=p9.element_text(angle=45,
                       hjust=1), legend_position="top")
            + p9.geom_violin(position=p9.position_dodge(1), width=1)
            + p9.scale_y_log10(labels=format_labels)
            + p9.scale_x_discrete(labels=format_label_name)
            + p9.scale_fill_brewer(type="seq",  palette="YlGnBu",
                                   direction=-1, labels=format_names)
            + p9.stat_summary(fun_data="mean_cl_boot", show_legend=False,
                              size=0.2, width=0.5, geom="crossbar", color='gray',
                              position=p9.position_dodge(1))
            + p9.facet_wrap('invoke_input', nrow=rows, labeller=format_title))

    p9.save_as_pdf_pages(
        [plot], filename="./../results/latency/plots/violin/latency_violin_all_" +
        str(invoke_type) + ".pdf")


for runtime, runtime_group in latency_runtime_groups:

    latency_invoke_type_groups = runtime_group.groupby('invoke_type')

    for invoke_type, invoke_type_group in latency_invoke_type_groups:

        latency_invoke_input_groups = invoke_type_group.groupby('invoke_input')

        for invoke_input, invoke_input_group in latency_invoke_input_groups:

            plot = (p9.ggplot(invoke_input_group, p9.aes(x='latency', col='trigger_type', colour='trigger_type')) + p9.labs(title="", y="CDF", x="Duration Time (milliseconds)", color="Trigger Type")
                    + p9.theme(legend_position="top", axis_title_y=p9.element_text(size=15), axis_title_x=p9.element_text(size=15), axis_text=p9.element_text(size=14)) + p9.stat_ecdf(geom="line", alpha=0.9, size=0.7) + p9.scale_x_log10(labels=format_labels) + p9.scale_color_brewer(type="qual",  palette="Set1", labels=format_label_name))

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
                + p9.theme(axis_text_x=p9.element_text(angle=45, hjust=1), axis_title_y=p9.element_text(size=15), axis_title_x=p9.element_text(size=15), axis_text=p9.element_text(size=14), legend_position="top") + p9.geom_violin(position=p9.position_dodge(1), width=1) + p9.scale_y_log10(labels=format_labels) + p9.scale_x_discrete(labels=format_label_name) + p9.scale_fill_brewer(type="seq",  palette="YlGnBu", direction=-1, labels=format_names) + p9.stat_summary(fun_data="mean_cl_normal", show_legend=False, geom="point", position=p9.position_dodge(1)))

        p9.save_as_pdf_pages(
            [plot], filename="./../results/latency/plots/violin/latency_violin_" +
            str(invoke_type) + "_" + str(invoke_input) + ".pdf")

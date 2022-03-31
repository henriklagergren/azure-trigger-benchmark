import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


result_list = []
if(os.isfile('./../results/latency/http.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/http.csv', delimiter=","))

if(os.isfile('./../results/latency/storage.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/storage.csv', delimiter=","))

if(os.isfile('./../results/latency/queue.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/queue.csv', delimiter=","))

if(os.isfile('./../results/latency/database.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/database.csv', delimiter=","))

if(os.isfile('./../results/latency/timer.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/timer.csv', delimiter=","))

if(os.isfile('./../results/latency/serviceBus.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/serviceBus.csv', delimiter=","))

if(os.isfile('./../results/latency/eventHub.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/eventHub.csv', delimiter=","))

if(os.isfile('./../results/latency/eventGrid.csv')):
    result_list.append(pd.read_csv(
        './../results/latency/eventGrid.csv', delimiter=","))


result_df = pd.concat(result_list)

plot = (p9.ggplot(result_df, p9.aes(
    x="trigger_type", y="latency"))
    + p9.geom_violin())

plot.save(filename="./../results/latency/results.pdf")

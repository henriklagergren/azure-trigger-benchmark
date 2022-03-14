import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


result_list = []
if(os.isfile('./../results/reliability/http.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/http.csv', delimiter=","))

if(os.isfile('./../results/reliability/storage.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/storage.csv', delimiter=","))

if(os.isfile('./../results/reliability/database.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/database.csv', delimiter=","))

if(os.isfile('./../results/reliability/queue.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/queue.csv', delimiter=","))

if(os.isfile('./../results/reliability/timer.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/timer.csv', delimiter=","))

if(os.isfile('./../results/reliability/serviceBus.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/serviceBus.csv', delimiter=","))

if(os.isfile('./../results/reliability/eventHub.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/eventHub.csv', delimiter=","))

if(os.isfile('./../results/reliability/eventGrid.csv')):
    result_list.append(pd.read_csv(
        './../results/reliability/eventGrid.csv', delimiter=","))


result_df = pd.concat(result_list)

plot = (p9.ggplot(result_df, p9.aes(
    x="trigger_type", y="missing_executes"))
    + p9.geom_col())

plot.save(filename="./../results/reliability/results_missing_executes.png")

plot = (p9.ggplot(result_df, p9.aes(
    x="trigger_type", y="duplicates_executes"))
    + p9.geom_col())

plot.save(
    filename="./../results/reliability/results_duplicates_executes.png")

plot = (p9.ggplot(result_df, p9.aes(
    x="trigger_type", y="out_of_order"))
    + p9.geom_col())

plot.save(
    filename="./../results/reliability/results_out_of_order.png")

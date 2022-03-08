import pandas as pd
import numpy as np
import plotnine as p9
import os.path as os


result_list = []
if(os.isfile('http.csv')):
    result_list.append(pd.read_csv('http.csv', delimiter=","))

if(os.isfile('storage.csv')):
    result_list.append(pd.read_csv('storage.csv', delimiter=","))

if(os.isfile('queue.csv')):
    result_list.append(pd.read_csv('queue.csv', delimiter=","))

if(os.isfile('timer.csv')):
    result_list.append(pd.read_csv('timer.csv', delimiter=","))

if(os.isfile('serviceBus.csv')):
    result_list.append(pd.read_csv('serviceBus.csv', delimiter=","))

if(os.isfile('eventHub.csv')):
    result_list.append(pd.read_csv('eventHub.csv', delimiter=","))

if(os.isfile('eventGrid.csv')):
    result_list.append(pd.read_csv('eventGrid.csv', delimiter=","))


result_df = pd.concat(result_list)

plot = (p9.ggplot(result_df, p9.aes(
    x="trigger_type", y="latency"))
    + p9.geom_violin() + p9.ylim(0, 10000))

plot.save(filename="results.png")

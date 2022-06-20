import os
import pandas as pd

print("\nRunning tests")
# First test reliability
os.system(
    "python3 ./../data_scripts/analyze_reliability.py -test 1")

result = pd.read_csv("results.csv")

is_test_ok = result["original_invokes"].values[0] == 5 and result["original_executes"].values[0] == 5 and result["duplicates_executes"].values[0] == 0 and result[
    "missing_executes"].values[0] == 0 and result["out_of_order"].values[0] == 0

if(is_test_ok):
    print("Test one reliability OK")
else:
    print("Test one reliability FAILED")

# First test latency

os.system(
    "python3 ./../data_scripts/analyze_latency.py -test 1")

result = pd.read_csv("results.csv")

is_test_ok = result['latency'][0] == 10 and result['latency'][1] == 25 and result['latency'][
    2] == 25 and result['latency'][3] == 17 and result['latency'][4] == 44

if(is_test_ok):
    print("Test first latency OK")
else:
    print("Test first latency FAILED")

# Second test reliability
os.system(
    "python3 ./../data_scripts/analyze_reliability.py -test 2")

result = pd.read_csv("results.csv")

is_test_ok = result["original_invokes"].values[0] == 6 and result["original_executes"].values[0] == 6 and result["duplicates_executes"].values[0] == 0 and result[
    "missing_executes"].values[0] == 0 and result["out_of_order"].values[0] == 3

if(is_test_ok):
    print("Test two reliability OK")
else:
    print("Test two reliability FAILED")

# Second test latency

os.system(
    "python3 ./../data_scripts/analyze_latency.py -test 2")

result = pd.read_csv("results.csv")

is_test_ok = result['latency'][0] == 10 and result['latency'][1] == 3 and result['latency'][
    2] == 25 and result['latency'][3] == 19 and result['latency'][4] == 10 and result['latency'][5] == 24

if(is_test_ok):
    print("Test second latency OK")
else:
    print("Test second latency FAILED")

# Third test
os.system(
    "python3 ./../data_scripts/analyze_reliability.py -test 3")

result = pd.read_csv("results.csv")

is_test_ok = result["original_invokes"].values[0] == 8 and result["original_executes"].values[0] == 7 and result["duplicates_executes"].values[0] == 2 and result[
    "missing_executes"].values[0] == 1 and result["out_of_order"].values[0] == 0

if(is_test_ok):
    print("Test third reliability OK")
else:
    print("Test third reliability FAILED")

os.system(
    "python3 ./../data_scripts/analyze_latency.py -test 3")

result = pd.read_csv("results.csv")

is_test_ok = result['latency'][0] == 10 and result['latency'][1] == 6 and result['latency'][2] == 25 and result['latency'][3] == 24

if(is_test_ok):
    print("Test third latency OK")
else:
    print("Test third latency FAILED")

print("")

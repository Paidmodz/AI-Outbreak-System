import pandas as pd

# Load dataset
data = pd.read_csv("../datasets/covid/country_wise_latest.csv")

# First 5 rows
print("\nFIRST 5 ROWS:")
print(data.head())

# Columns
print("\nCOLUMNS:")
print(data.columns)

# Dataset info
print("\nINFO:")
print(data.info())

# Missing values
print("\nMISSING VALUES:")
print(data.isnull().sum())

# Shape
print("\nSHAPE:")
print(data.shape)
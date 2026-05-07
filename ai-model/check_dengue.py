import pandas as pd

# Dengue dataset load
data = pd.read_csv("../datasets/dengue/dengue.csv")

# First 5 rows
print("\nFIRST 5 ROWS:")
print(data.head())

# Column names
print("\nCOLUMNS:")
print(data.columns)

# Dataset information
print("\nINFO:")
print(data.info())

# Missing values
print("\nMISSING VALUES:")
print(data.isnull().sum())

# Dataset shape
print("\nSHAPE:")
print(data.shape)
import pandas as pd

data = pd.read_csv("../datasets/population/world_population.csv")

print("\nFIRST 5 ROWS:")
print(data.head())

print("\nCOLUMNS:")
print(data.columns)

print("\nINFO:")
print(data.info())

print("\nMISSING VALUES:")
print(data.isnull().sum())

print("\nSHAPE:")
print(data.shape)
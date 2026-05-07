import pandas as pd

data = pd.read_csv("../datasets/population/world_population.csv")

data = data.dropna()
data = data.drop_duplicates()

data.to_csv("../datasets/cleaned/clean_population.csv", index=False)

print("Population Dataset Cleaned Successfully")
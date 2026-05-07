import pandas as pd

data = pd.read_csv("../datasets/dengue/dengue.csv")

data = data.dropna()
data = data.drop_duplicates()

data.to_csv("../datasets/cleaned/clean_dengue.csv", index=False)

print("Dengue Dataset Cleaned Successfully")
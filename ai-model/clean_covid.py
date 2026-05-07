import pandas as pd

data = pd.read_csv("../datasets/covid/country_wise_latest.csv")

# Remove null values
data = data.dropna()

# Remove duplicates
data = data.drop_duplicates()

# Save cleaned file
data.to_csv("../datasets/cleaned/clean_covid.csv", index=False)

print("COVID Dataset Cleaned Successfully")
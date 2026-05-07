import pandas as pd

# Load datasets
covid = pd.read_csv("../datasets/cleaned/clean_covid.csv")
population = pd.read_csv("../datasets/cleaned/clean_population.csv")

# Rename country column
population.rename(
    columns={"Country/Territory": "Country/Region"},
    inplace=True
)

# Rename population column
population.rename(
    columns={"2022 Population": "Population"},
    inplace=True
)

# Merge datasets
merged = pd.merge(
    covid,
    population,
    on="Country/Region",
    how="inner"
)

# Save merged dataset
merged.to_csv(
    "../datasets/cleaned/final_merged_data.csv",
    index=False
)

print("\nDatasets Merged Successfully")

print("\nFINAL COLUMNS:")
print(merged.columns)
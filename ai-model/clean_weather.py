import pandas as pd

data = pd.read_csv("../datasets/weather/GlobalWeatherRepository.csv")

data = data.dropna()
data = data.drop_duplicates()

data.to_csv("../datasets/cleaned/clean_weather.csv", index=False)

print("Weather Dataset Cleaned Successfully")
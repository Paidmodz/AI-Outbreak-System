import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load cleaned covid dataset
data = pd.read_csv("../datasets/cleaned/clean_covid.csv")

# -------------------------------
# BAR GRAPH
# -------------------------------

top10 = data.sort_values(by="Confirmed", ascending=False).head(10)

plt.figure(figsize=(12,6))

plt.bar(top10["Country/Region"], top10["Confirmed"])

plt.xticks(rotation=45)

plt.xlabel("Country")
plt.ylabel("Confirmed Cases")
plt.title("Top 10 Countries by COVID Cases")

plt.tight_layout()

plt.show()

# -------------------------------
# PIE CHART
# -------------------------------

plt.figure(figsize=(8,8))

top5 = top10.head(5)

plt.pie(
    top5["Confirmed"],
    labels=top5["Country/Region"],
    autopct="%1.1f%%"
)

plt.title("Top 5 COVID Affected Countries")

plt.show()

# -------------------------------
# SCATTER PLOT
# -------------------------------

plt.figure(figsize=(10,6))

sns.scatterplot(
    x=data["Confirmed"],
    y=data["Deaths"]
)

plt.xlabel("Confirmed Cases")
plt.ylabel("Deaths")
plt.title("Confirmed vs Deaths")

plt.show()
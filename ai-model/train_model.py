import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load cleaned dataset
data = pd.read_csv("../datasets/cleaned/clean_covid.csv")

# Select features
X = data[["Confirmed", "Deaths", "Recovered", "Active"]]

# Create target column
# High Risk if confirmed cases > 100000

data["Risk_Level"] = data["Confirmed"].apply(
    lambda x: 1 if x > 100000 else 0
)

y = data["Risk_Level"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create model
model = RandomForestClassifier()

# Train model
model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, predictions)

print("\nMODEL ACCURACY:")
print(accuracy)
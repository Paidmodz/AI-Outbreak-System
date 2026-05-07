import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load merged dataset
data = pd.read_csv("../datasets/cleaned/final_merged_data.csv")

# Fill missing values
data = data.fillna(0)

# Create risk level
data["Risk_Level"] = data["Confirmed"].apply(
    lambda x: 1 if x > 100000 else 0
)

# Features
X = data[[
    "Confirmed",
    "Deaths",
    "Recovered",
    "Active",
    "Population"
]]

# Target
y = data["Risk_Level"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

# Model
model = RandomForestClassifier()

# Train
model.fit(X_train, y_train)

# Prediction
predictions = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, predictions)

print("\nMODEL ACCURACY:")
print(accuracy)

# Save model
pickle.dump(model, open("outbreak_model.pkl", "wb"))

print("\nModel Saved Successfully")
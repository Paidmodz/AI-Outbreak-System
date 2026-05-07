import pickle
import numpy as np

# Load model
model = pickle.load(open("outbreak_model.pkl", "rb"))

# Example input:
# Confirmed, Deaths, Recovered, Active, Population

sample_data = np.array([[200000, 5000, 150000, 45000, 1000000]])

prediction = model.predict(sample_data)

if prediction[0] == 1:
    print("HIGH RISK OUTBREAK")
else:
    print("LOW RISK")
from flask import Flask, request, jsonify
from flask_cors import CORS

import pickle
import numpy as np

# Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Load trained model
model = pickle.load(open("outbreak_model.pkl", "rb"))

# Home route
@app.route("/")
def home():
    return "AI Outbreak Prediction API Running"

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.json

        confirmed = data["confirmed"]
        deaths = data["deaths"]
        recovered = data["recovered"]
        active = data["active"]
        population = data["population"]

        # Convert to array
        input_data = np.array([[
            confirmed,
            deaths,
            recovered,
            active,
            population
        ]])

        # Prediction
        prediction = model.predict(input_data)

        # Result
        result = "HIGH RISK" if prediction[0] == 1 else "LOW RISK"

        return jsonify({
            "prediction": result
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

# Run server
if __name__ == "__main__":
    app.run(debug=True)
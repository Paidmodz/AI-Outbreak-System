const express = require("express");
const router = express.Router();

const Prediction = require("../models/Prediction");
const sendEmail = require("../utils/sendEmail");

const axios = require("axios");

router.post("/", async (req, res) => {

    try {

        const response = await axios.post(
            "http://127.0.0.1:5000/predict",
            req.body
        );

        // Prediction result
        const predictionResult =
            response.data.prediction;

        // Save prediction in MongoDB
        await Prediction.create({

            confirmed: req.body.confirmed,

            deaths: req.body.deaths,

            recovered: req.body.recovered,

            active: req.body.active,

            population: req.body.population,

            result: predictionResult

        });

        // HIGH RISK EMAIL ALERT
        if (
            predictionResult === "HIGH RISK"
        ) {

            await sendEmail(

                "⚠ HIGH RISK OUTBREAK ALERT",

                `
AI Outbreak System detected a HIGH RISK outbreak.

Confirmed Cases:
${req.body.confirmed}

Deaths:
${req.body.deaths}

Population:
${req.body.population}

Immediate monitoring required.
                `
            );

        }

        // Final response
        res.json({

            prediction: predictionResult

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;
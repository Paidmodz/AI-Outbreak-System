const express = require("express");

const router = express.Router();

const Prediction =
    require("../models/Prediction");


// Prediction Route
router.post("/", async (req, res) => {

    try {

        const {

            confirmed,

            deaths,

            recovered,

            active,

            population

        } = req.body;

        // Basic AI Logic
        let prediction = "LOW RISK";

        if (

            confirmed > 100000 ||

            deaths > 5000 ||

            active > 50000

        ) {

            prediction = "HIGH RISK";

        }

        // Save prediction
        await Prediction.create({

            confirmed,

            deaths,

            recovered,

            active,

            population,

            result: prediction

        });

        res.json({

            prediction

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message:
                "Prediction Failed"

        });

    }

});

module.exports = router;
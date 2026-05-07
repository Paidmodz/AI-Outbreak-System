const express = require("express");

const router = express.Router();

const Prediction =
    require("../models/Prediction");

router.get("/", async (req, res) => {

    try {

        const history =
            await Prediction.find()
                .sort({ createdAt: -1 });

        res.json(history);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;
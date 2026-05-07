const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({

    confirmed: Number,

    deaths: Number,

    recovered: Number,

    active: Number,

    population: Number,

    result: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Prediction",
    PredictionSchema
);
const mongoose = require("mongoose");

const DatasetSchema = new mongoose.Schema({

    filename: String,

    uploadedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Dataset",
    DatasetSchema
);
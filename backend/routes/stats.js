const express = require("express");

const router = express.Router();

const Dataset = require("../models/Dataset");

const User = require("../models/User");

router.get("/", async (req, res) => {

    try {

        // Total datasets
        const totalDatasets =
            await Dataset.countDocuments();

        // Total users
        const totalUsers =
            await User.countDocuments();

        // Recent uploads
        const recentUploads =
            await Dataset.find()
                .sort({ uploadedAt: -1 })
                .limit(5);

        res.json({

            totalDatasets,

            totalUsers,

            recentUploads

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

});

module.exports = router;
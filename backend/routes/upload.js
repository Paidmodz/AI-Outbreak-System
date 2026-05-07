const express = require("express");

const router = express.Router();

const multer = require("multer");

const Dataset = require("../models/Dataset");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads/");

    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + "-" + file.originalname
        );

    }

});

const upload = multer({ storage });

router.post(
    "/",
    upload.single("file"),
    async (req, res) => {

        try {

            const dataset = new Dataset({

                filename: req.file.filename

            });

            await dataset.save();

            res.json({

                message: "File Uploaded Successfully",

                file: req.file.filename

            });

        } catch (error) {

            res.status(500).json({

                error: error.message

            });

        }

    }
);

module.exports = router;
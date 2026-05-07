const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const SECRET_KEY = "AI_OUTBREAK_SECRET";


// SIGNUP

router.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.json({
                message: "User Already Exists"
            });

        }

        // Hash password
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // Create user
        const user = new User({

            name,
            email,
            password: hashedPassword

        });

        await user.save();

        res.json({
            message: "Signup Successful"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// LOGIN

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.json({
                message: "User Not Found"
            });

        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.json({
                message: "Invalid Password"
            });

        }

        // Create token
        const token = jwt.sign(

            {
                id: user._id
            },

            SECRET_KEY,

            {
                expiresIn: "1d"
            }

        );

        res.json({

            message: "Login Successful",

            token

        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;
const jwt = require("jsonwebtoken");

const SECRET_KEY = "AI_OUTBREAK_SECRET";

const authMiddleware = (req, res, next) => {

    try {

        // Get header
        const authHeader =
            req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({

                message: "Access Denied"

            });

        }

        // Remove Bearer
        const token =
            authHeader.split(" ")[1];

        // Verify token
        const verified = jwt.verify(
            token,
            SECRET_KEY
        );

        req.user = verified;

        next();

    } catch (error) {

        res.status(401).json({

            message: "Invalid Token"

        });

    }

};

module.exports = authMiddleware;
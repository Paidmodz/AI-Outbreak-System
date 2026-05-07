require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const predictRoute = require("./routes/predict");

const uploadRoute = require("./routes/upload");

const authRoute = require("./routes/auth");

const dashboardRoute = require("./routes/dashboard");

const statsRoute = require("./routes/stats");

const historyRoute = require("./routes/history");

const app = express();


// CORS FIX
app.use(cors({

    origin: "*",

    methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
    ],

    credentials: true

}));


app.use(express.json());


// MongoDB Connection
mongoose.connect(

    process.env.MONGO_URI,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log("MongoDB Error:", err);

});


// Routes
app.use("/predict", predictRoute);

app.use("/upload", uploadRoute);

app.use("/auth", authRoute);

app.use("/dashboard", dashboardRoute);

app.use("/stats", statsRoute);

app.use("/history", historyRoute);


// Home Route
app.get("/", (req, res) => {

    res.send("Backend Running Successfully");

});


// Server Port
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {

    console.log(

        `Server running on port ${PORT}`

    );

});
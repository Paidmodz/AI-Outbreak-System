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

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://127.0.0.1:27017/ai_outbreak_db"
)
.then(() => {

    console.log("MongoDB Connected");

})
.catch((err) => {

    console.log(err);

});

app.use("/predict", predictRoute);

app.use("/upload", uploadRoute);

app.use("/auth", authRoute);

app.use("/dashboard", dashboardRoute);

app.use("/stats", statsRoute);

app.use("/history", historyRoute);

app.get("/", (req, res) => {

    res.send("Backend Running Successfully");

});

const PORT = 5001;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
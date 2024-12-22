const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");

const connectDB = require("./database/connection");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.get("/", (req, res) => {
    res.send("Hello World");

})

app.use("/users", userRoutes);

module.exports = app;
const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const connectDB = require("./database/connection");
connectDB();


app.get("/", (req, res) => {
    res.send("hello world");

})

module.exports = app;
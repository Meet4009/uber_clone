const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");

const connectDB = require("./database/connection");

dotenv.config();
const app = express();
app.use(cors());

connectDB();


app.get("/", (req, res) => {
    res.send("hello world");

})

module.exports = app;
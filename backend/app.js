const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const cookies = require("cookie-parser");

const connectDB = require("./database/connection");
const userRoutes = require("./routes/userRoutes");
const captianRoutes = require("./routes/captianRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookies());

connectDB();

app.use("/users", userRoutes);
app.use("/captian", captianRoutes);

module.exports = app;
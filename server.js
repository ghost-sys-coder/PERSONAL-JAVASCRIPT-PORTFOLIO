const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

/**
 * ! Importing Routes
 */
const homeRoute = require("./routes/home");

/**
 * ! Importing Database Connection
 */
const connectDB = require("./database/db");

/**
 * ! Loading Configuration File
 */
dotenv.config({ path: "./config/config.env" });

const app = express();
const port = process.env.PORT || 8000;

/**
 * ! Logging files, routes and actions
 */
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

/**
 * ! Middleware
 */
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

/**
 * ! Launching View Engine
 */
app.set("view engine", "ejs");

/**
 * ! Running Routes
 */
app.use("/", homeRoute);

/**
 * ! Running Express App
 */
app.listen(port, () => {
    connectDB();
    console.log(`Express app running on port:${port}`);
})
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routers = require("./routers/api");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/api", routers);

app.use((req, res) => {
    res.status(404).send({ message: "Not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

module.exports = app;
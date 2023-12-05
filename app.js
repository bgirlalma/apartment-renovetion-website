const express = require("express");
const cors = require("cors");
const routers = require("./routers/api");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routers);

app.use((req, res) => {
    res.status(404).send({ message: "Not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

require("dotenv").config();
module.exports = app;
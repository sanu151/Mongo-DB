const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db.config");
const appRouter = require("./routes/app.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRouter);

module.exports = app;

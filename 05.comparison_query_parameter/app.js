const express = require("express");
const app = express();
const appRoute = require("./routes/app.route");

app.use(express.json());
app.use(express.urlencoded());
app.use(appRoute);

module.exports = app;

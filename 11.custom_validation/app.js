const express = require("express");
const app = express();
const appRoute = require("./routes/app.routes");
const { notFoundPage } = require("./controllers/routes.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(appRoute);
app.use(notFoundPage);

module.exports = app;

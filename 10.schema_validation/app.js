const express = require("express");
const { notFoundPage } = require("./controller/route.controller");
const app = express();
const appRoutes = require("./routes/app.routes");

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(appRoutes);
app.use(notFoundPage);

module.exports = app;

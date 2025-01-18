const express = require("express");

const app = express();
const appRoutes = require("./routes/app.route");

app.use(express.json());
app.use(express.urlencoded());
app.use(appRoutes);

module.exports = app;

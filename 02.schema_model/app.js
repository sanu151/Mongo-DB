const express = require("express");

const app = express();
const homeRoute = require("./routes/home.route");
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(homeRoute);
app.use(productRoute);

module.exports = app;

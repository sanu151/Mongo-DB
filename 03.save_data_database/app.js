const express = require("express");

const app = express();

const productRoute = require("./routes/product.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home Page");
});

app.use(productRoute);

module.exports = app;

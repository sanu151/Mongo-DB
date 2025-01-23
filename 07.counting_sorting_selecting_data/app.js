const express = require("express");

const app = express();
const appRoute = require("./routes/app.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoute);

app.use((req, res, next) => {
  res.status(404).send("<h2>Page not found</h2>");
});

module.exports = app;

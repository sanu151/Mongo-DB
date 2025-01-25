const express = require("express");
const app = express();
const appRoutes = require("./routes/app.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

module.exports = app;

const express = require("express");
const { sendData } = require("../controller/app.controller");
const route = express.Router();

route.get("/", sendData);

module.exports = route;

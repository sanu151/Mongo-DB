const express = require("express");
const {
  sendData,
  receiveData,
  homeRoute,
} = require("../controller/app.controller");
const route = express.Router();

route.get("/", homeRoute);
route.get("/products", receiveData);
route.post("/products", sendData);

module.exports = route;

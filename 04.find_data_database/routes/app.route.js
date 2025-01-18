const express = require("express");
const {
  homeRoute,
  sendData,
  receiveData,
  receiveOneData,
} = require("../controller/route.controller");
const route = express.Router();

route.get("/", homeRoute);
route.get("/products", receiveData);
route.get("/products/:id", receiveOneData);
route.post("/products", sendData);

module.exports = route;

const express = require("express");
const route = express.Router();
const {
  homeRoute,
  sendData,
  getData,
  deleteData,
} = require("../controller/routes.controller");

route.get("/", homeRoute);

route.get("/products", getData);
route.post("/products", sendData);
route.delete("/products/:id", deleteData);

module.exports = route;

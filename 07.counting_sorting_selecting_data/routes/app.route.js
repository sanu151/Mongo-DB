const express = require("express");
const {
  homeRoute,
  sendData,
  getData,
} = require("../controllers/route.controller");
const route = express.Router();

route.get("/", homeRoute);
route.post("/products", sendData);
route.get("/products", getData);

module.exports = route;

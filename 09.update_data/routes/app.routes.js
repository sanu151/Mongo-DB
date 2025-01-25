const express = require("express");
const {
  homeRoute,
  sendData,
  getData,
  updateData,
  deleteData,
} = require("../controller/route.controller");
const route = express.Router();

route.get("/", homeRoute);
route.post("/products", sendData);
route.get("/products", getData);
route.put("/products/:id", updateData);
route.delete("/products/:id", deleteData);

module.exports = route;

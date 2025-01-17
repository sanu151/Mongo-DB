const express = require("express");
const { sendData, productData } = require("../controller/product.controller");

const route = express.Router();

route.get("/products", sendData);
route.post("/products", productData);

module.exports = route;

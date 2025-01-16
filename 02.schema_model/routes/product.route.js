const express = require("express");
const {
  productController,
  saveProduct,
} = require("../controller/product.controller");
const route = express.Router();

route.get("/products", productController);
route.post("/products", saveProduct);

module.exports = route;

const express = require("express");
const {
  homeRoute,
  notFoundPage,
  sendUsers,
  getUsers,
} = require("../controllers/routes.controller");
const route = express.Router();

route.get("/", homeRoute);
route.post("/users", sendUsers);
route.get("/users", getUsers);

module.exports = route;

const express = require("express");
const {
  homeRoute,
  createUser,
  getAllUsers,
  getOneUser,
  updateUsers,
  deleteUser,
} = require("../controllers/route.controller");
const router = express.Router();

router.get("/", homeRoute);
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;

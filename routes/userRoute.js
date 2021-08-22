const { Router } = require("express");
const { User, ContactInfo } = require("./../models");
const router = Router();
const { Op } = require("sequelize");
const { sequelize } = require("./../models");

const userController = require("./../controlers/usersController");
const usersController = require("./../controlers/usersController");
router.post("/", userController.createUser);

router.get("/", userController.findAllUsers);
router.get("/", userController.findAllUsers);
router.get("/search", userController.getUserByCity);
router.get("/:id", usersController.findUserById);
router.get("/:id/orders", usersController.getAllOrders);
module.exports = router;

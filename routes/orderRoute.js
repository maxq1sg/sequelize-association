const { Router } = require("express");
const router = Router();
const ordersController = require("./../controlers/ordersController");

router.post("/", ordersController.createOrder);

// router.get("/", userController.findAllUsers);
// router.get("/", userController.findAllUsers);
// router.get("/search", userController.getUserByCity);
// router.get("/:id", usersController.findUserById);
module.exports = router;

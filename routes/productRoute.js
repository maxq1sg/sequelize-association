const { Router } = require("express");
const router = Router();
const productController = require("./../controlers/productsController");

router.post("/", productController.createProduct);
router.post("/multiple", productController.createMultipleProducts);

// router.get("/", userController.findAllUsers);
// router.get("/", userController.findAllUsers);
// router.get("/search", userController.getUserByCity);
// router.get("/:id", usersController.findUserById);
module.exports = router;

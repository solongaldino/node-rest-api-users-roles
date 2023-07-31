const { Router } = require("express");
const { UserController } = require("../controllers");

const router = Router();

router.post("/", UserController.create);

router.get("/:id", UserController.getById);

router.post("/login", UserController.login);

module.exports = router;

const { Router } = require("express");
const { UserController } = require("../controllers");
const { authHandle } = require("../middlewares/express");

const router = Router();

router.post("/", UserController.create);

router.get("/:id", authHandle, UserController.getById);

router.post("/login", UserController.login);

module.exports = router;

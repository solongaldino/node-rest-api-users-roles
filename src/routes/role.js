const { Router } = require("express");
const { RoleController } = require("../controllers");
const { authHandle } = require("../middlewares/express");

const router = Router();

router.post("/", RoleController.create);
router.get("/:id", authHandle, RoleController.findById);
router.get("/list", authHandle, RoleController.findAll);
router.get("/list-by-user-id/:userId", authHandle, RoleController.findAllByUserId);

module.exports = router;

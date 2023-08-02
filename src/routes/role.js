const { Router } = require("express");
const { RoleController } = require("../controllers");
const { authHandle } = require("../middlewares/express");

const router = Router();

router.post("/", authHandle, RoleController.create);
router.get("/find-all", authHandle, RoleController.findAll);
router.get("/find-all-by-user-id/:fk_id_user", authHandle, RoleController.findAllByUserId);
router.get("/:id", authHandle, RoleController.findById);

module.exports = router;

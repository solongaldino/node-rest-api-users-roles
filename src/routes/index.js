const { Router } = require("express");
const roleRouter = require("./role");
const userRouter = require("./user");

const router = Router();

router.use('/role', roleRouter);
router.use('/user', userRouter);

module.exports = router;
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res, next) => {
    res.status(200).send({
        message: "Olá usuários!"
    });
});

module.exports = router;

const { Router } = require("express");
const { UserRepositorySqlite } = require("../repositories/sqlite");

const router = Router();

router.get("/", async (req, res, next) => {
  const response = await UserRepositorySqlite.findAll();
  console.log(response);
  res.status(200).send({
    message: "Olá usuários",
  });
});

router.post("/", async (req, res, next) => {
  const { name, email, password } = req.body;
  await UserRepositorySqlite.create({ name, email, password });
  res.status(201).send({
    message: "Usuário criado com sucesso",
  });
});

module.exports = router;

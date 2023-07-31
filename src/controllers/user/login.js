module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await UserRepositorySqlite.create({ email, password });
    res.status(201).send({
      message: "Usuário criado com sucesso",
    });
  } catch (error) {
    next(error);
  }
};

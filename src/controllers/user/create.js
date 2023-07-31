const { UserUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await UserUseCase.create({ name, email, password });
    res.status(201).send({
      message: "Usuário criado com sucesso",
    });
  } catch (error) {
    next(error);
  }
};

const { RoleUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { fk_id_user, value }= req.body;
    await RoleUseCase.create({ fk_id_user, value });
    res.status(201).send({
      message: "Role criado com sucesso",
    });
  } catch (error) {
    next(error);
  }
};

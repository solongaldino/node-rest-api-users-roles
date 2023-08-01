const { RoleUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const response = await RoleUseCase.findAll();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

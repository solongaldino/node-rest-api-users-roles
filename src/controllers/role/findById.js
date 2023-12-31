const { RoleUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await RoleUseCase.findById({ id });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
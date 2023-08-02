const { RoleUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { fk_id_user } = req.params;
    const response = await RoleUseCase.findAllByUserId({ fk_id_user });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

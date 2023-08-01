const { RoleUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const response = await RoleUseCase.findAllByUserId({ fk_id_user: userId });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

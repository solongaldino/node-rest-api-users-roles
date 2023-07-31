const { UserUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await UserUseCase.getById({ id });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
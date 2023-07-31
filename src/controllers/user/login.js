const { UserUseCase } = require("../../useCases");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await UserUseCase.login({ email, password });
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

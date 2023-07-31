const { ApiError, AuthJwt } = require("../../utils");
const { LoggedUserRepositoryRedisOM } = require("../../repositories/redis-om");

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    next(new ApiError(400, 'Authorization header not provided'));
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const jwtPayload = AuthJwt.isAuthenticated(token);
    ['iat', 'exp'].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);
    req.jwtPayload = jwtPayload;
    req.claims = { userId: jwtPayload.id };

    await LoggedUserRepositoryRedisOM.save({
      name: `Olá mundo - ${4}`
    });

    next();
  } catch (error) {
    return next(ApiError.authorizationError(error));
  }
};
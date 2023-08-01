const { ApiError, AuthJwt } = require("../../utils");
const { UserRepositorySqlite } = require("../../repositories/sqlite");
const {
  LoggedUserRepositoryRedisOM,
  MainRepositoryRedisOM,
} = require("../../repositories/redis-om");

async function getLoggedUserById(id) {
  let loggedUserData = await LoggedUserRepositoryRedisOM.getById(id);
  console.log("Redis query", loggedUserData);
  if (loggedUserData.length <= 0) {
    const userSqlite = await UserRepositorySqlite.findById(id);

    if (!userSqlite) {
      throw new Error("User not found");
    }

    loggedUserData = await LoggedUserRepositoryRedisOM.save({
      id: userSqlite.id,
      name: userSqlite.name,
    });

    await MainRepositoryRedisOM.expire(
      LoggedUserRepositoryRedisOM.schema,
      loggedUserData,
      AuthJwt.expiresJwtAccessTokenInSeconds
    );
  }

  return loggedUserData;
}

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    next(new ApiError(400, "Authorization header not provided"));
    return;
  }

  try {
    const token = authHeader.split(" ")[1];
    const jwtPayload = AuthJwt.isAuthenticated(token);
    ["iat", "exp"].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);

    req.jwtPayload = jwtPayload;
    req.loggedUser = await getLoggedUserById(jwtPayload.id);

    next();
  } catch (error) {
    return next(ApiError.authorizationError(error));
  }
};

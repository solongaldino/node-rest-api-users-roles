const { UserRepositorySqlite } = require("../../repositories/sqlite");

module.exports = async ({ id }) => {
  const user = await UserRepositorySqlite.findById(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  delete user['password'];

  return user;
};

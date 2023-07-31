const { UserRepositorySqlite } = require("../../repositories/sqlite");
const { CryptoPassword, AuthJwt, ApiError } = require("../../utils");

module.exports = async ({ email, password }) => {
  const user = await UserRepositorySqlite.findByEmail(email);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isValidPassword = CryptoPassword.comparePassword(
    password,
    user.password
  );

  if (!isValidPassword) {
    throw new ApiError(400, "Invalid password");
  }

  const { accessToken, refreshToken } = AuthJwt.login({
    id: user.id,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    access_token: accessToken,
    refresh_token: refreshToken,
    created_at: user.created_at
  };
};

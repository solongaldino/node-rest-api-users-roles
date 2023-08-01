const jwt = require("jsonwebtoken");

const secretJwt =
  process.env.SECRET_JWT || "df287dfc1406ed2b692e1c2c783bb5ce783bb5cec97ea";

const expiresJwtAccessTokenInSeconds =
  Number(process.env.EXPIRES_JWT_ACCESS_TOKEN_IN_SECONDS) || 60 * 10;

const expiresJwtRefreshTokenInSeconds =
  Number(process.env.EXPIRES_JWT_REFRESH_TOKEN_IN_SECONDS) || 60 * 60 * 24 * 30;

function generationToken(
  params = {},
  expiresInSeconds = expiresJwtAccessTokenInSeconds
) {
  return jwt.sign(params, secretJwt, {
    expiresIn: expiresInSeconds,
  });
}

module.exports = {
  login: (params) => {
    return {
      refreshToken: generationToken(params, expiresJwtRefreshTokenInSeconds),
      accessToken: generationToken(params),
    };
  },
  isAuthenticated: (token) => {
    return jwt.verify(token, secretJwt);
  },
  decode: (token) => {
    return jwt.decode(token);
  },
  expiresJwtAccessTokenInSeconds,
};

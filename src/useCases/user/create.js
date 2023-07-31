const { UserRepositorySqlite } = require("../../repositories/sqlite");
const { CryptoPassword } = require("../../utils");

module.exports = async ({ name, email, password }) => {
  const hashPassword = CryptoPassword.generationHash(password);
  await UserRepositorySqlite.create({ name, email, password: hashPassword });
};

const { RoleRepositorySqlite } = require("../../repositories/sqlite");

module.exports = async () => {
  return await RoleRepositorySqlite.findAll();
};

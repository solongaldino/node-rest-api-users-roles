const { RoleRepositorySqlite } = require("../../repositories/sqlite");

module.exports = async ({ fk_id_user }) => {
  return await RoleRepositorySqlite.findAllByUserId(fk_id_user);
};

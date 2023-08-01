const { RoleRepositorySqlite } = require("../../repositories/sqlite");

module.exports = async ({ fk_id_user, value }) => {
  await RoleRepositorySqlite.create({ fk_id_user, value });
};

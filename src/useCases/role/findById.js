const { RoleRepositorySqlite } = require("../../repositories/sqlite");

module.exports = async ({ id }) => {
  const role = await RoleRepositorySqlite.findById(id);

  if (!role) {
    throw new ApiError(404, "Role not found");
  }

  return role;
};

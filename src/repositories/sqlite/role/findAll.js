const MainRepositorySqlite = require("../main");

module.exports = async () => {
  const conn = await MainRepositorySqlite.getConection();
  return await conn.run("SELECT * FROM tb_roles");
};

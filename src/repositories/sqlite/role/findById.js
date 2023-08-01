const MainRepositorySqlite = require("../main");

module.exports = async (id) => {
  const conn = await MainRepositorySqlite.getConection();
  return await conn.get(`SELECT * FROM tb_roles WHERE id='${id}';`);
};

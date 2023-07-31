const MainRepositorySqlite = require("../main");

module.exports = async (id) => {
  const conn = await MainRepositorySqlite.getConection();
  const result = await conn.get(`SELECT * FROM tb_users WHERE id='${id}';`);
  return result;
};

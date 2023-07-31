const MainRepositorySqlite = require("../main");

module.exports = async (email) => {
  const conn = await MainRepositorySqlite.getConection();
  const result = await conn.get(`SELECT * FROM tb_users WHERE email='${email}';`);
  return result;
};

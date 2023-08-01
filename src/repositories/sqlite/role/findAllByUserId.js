const MainRepositorySqlite = require("../main");

module.exports = async (fk_id_user) => {
  const conn = await MainRepositorySqlite.getConection();
  return await conn.get(
    `SELECT * FROM tb_roles WHERE fk_id_user='${fk_id_user}';`
  );
};

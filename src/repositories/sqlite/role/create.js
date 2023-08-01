const MainRepositorySqlite = require("../main");

module.exports = async ({ fk_id_user, value }) => {
  const conn = await MainRepositorySqlite.getConection();
  const SQL = `INSERT INTO tb_roles(fk_id_user, value) VALUES(?, ?);`;
  await conn.run(SQL, [fk_id_user, value]);
};

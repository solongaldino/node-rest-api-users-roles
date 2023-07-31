const MainRepositorySqlite = require("../main");

module.exports = async ({ name, email, password }) => {
  const conn = await MainRepositorySqlite.getConection();
  const SQL = `INSERT INTO tb_users(name, email, password) VALUES(?, ?, ?);`;
  await conn.run(SQL, [name, email, password]);
};

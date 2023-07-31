const MainRepositorySqlite = require("../main");

module.exports = async () => {
  const conn = await MainRepositorySqlite.getConection();
  const result = await conn.run("SELECT * FROM tb_users");
  console.log({ result });
};

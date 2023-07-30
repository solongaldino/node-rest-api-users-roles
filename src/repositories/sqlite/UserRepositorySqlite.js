const MainRepositorySqlite = require("./MainRepositorySqlite");

module.exports = {
  findAll: async () => {
    const conn = await MainRepositorySqlite.getConection();
    const result = await conn.run("SELECT * FROM tb_users");
    console.log({ result });
  },
  create: async ({ name, email, password }) => {
    const conn = await MainRepositorySqlite.getConection();
    const SQL = `INSERT INTO tb_users(name, email, password) VALUES(?, ?, ?);`;
    await conn.run(SQL, [name, email, password]);
  },
};

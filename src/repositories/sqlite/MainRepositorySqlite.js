const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

module.exports = {
  getConection: () =>
    sqlite.open({
      filename: "./database.db",
      driver: sqlite3.Database,
    }),
  createSchema: async () => {
    const SQL = `CREATE TABLE tb_users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
          
          CREATE TABLE tb_roles (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              fk_id_user INTEGER NOT NULL,
              value TEXT NOT NULL,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
              FOREIGN KEY (fk_id_user) REFERENCES tb_users(id)
          );`;

    const conn = await this.getConection();

    conn.run(SQL);

    console.log("Create schema sqlite.");
  },
};

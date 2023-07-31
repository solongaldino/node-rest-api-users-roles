const getConection = require("./getConection");

module.exports = async () => {
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

    const conn = await getConection();

    conn.run(SQL);

    console.log("Create schema sqlite.");
  };

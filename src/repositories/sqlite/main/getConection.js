const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");

module.exports = () =>
  sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

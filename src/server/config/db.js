const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aa638010@@",
  database: "todoDb",
  port: 3306,
});

module.exports = db;

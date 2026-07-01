const mysql = require("mysql2/promise");

const connection =
mysql.createPool({

  host: "localhost",

  user: "root",

  password: "123456",

  database: "caminho_da_fe",

  waitForConnections: true,

  connectionLimit: 10,

});

module.exports = connection;
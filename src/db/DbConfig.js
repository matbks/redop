const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    return;
  }
  console.log("Conectado ao banco de dados");
});

module.exports = connection;

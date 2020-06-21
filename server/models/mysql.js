var mysql = require('mysql');
const dbConfig = require("./db.config.js");

var connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('DB Connected successfully');
});
 
module.exports = connection;
//connection.end();
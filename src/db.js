const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AIAdanica@123", // Enter your MySQL root password if set
    database: "login_system"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database");
});

module.exports = db;

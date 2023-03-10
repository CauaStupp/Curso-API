const mysql = require('mysql');


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        throw new Error(error);
    } else {
        console.log('Tudo ok no ' + process.env.DB_NAME);
    }
});

module.exports = connection;
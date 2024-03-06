const mysql = require('mysql2/promise')
// to load environment variables from '.env' file into 'process.eng'
require('dotenv').config()

// Create a connection pool
  // Here, "pool" maintains a cache of db connection for reuse, enhancing performance
  // by reducing the overhead of establishing connections for future db requests 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

module.exports = pool;
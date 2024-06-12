import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections:true,
  connectionLimit: 10, 
  queueLimit:0
});

/*
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cocina2",
  waitForConnections:true,
  connectionLimit: 10, 
  queueLimit:0
});
*/
export default pool;

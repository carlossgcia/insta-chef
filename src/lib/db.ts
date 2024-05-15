import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cooking',
  connectionLimit: 10, // Número máximo de conexiones en el grupo de conexiones
});

export default pool;

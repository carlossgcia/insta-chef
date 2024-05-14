import mysql from 'mysql2/promise';


const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cooking'
};

export async function getConnection() {
    return await mysql.createConnection(connectionConfig);
}

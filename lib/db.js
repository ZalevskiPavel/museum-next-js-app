const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: 'localhost', 
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

let poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
    sql,
    poolPromise
};
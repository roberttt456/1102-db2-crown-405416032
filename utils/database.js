const {Pool} = require('pg');
const {connectionString} = require("pg/lib/defaults");

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isProduction){
    pool=new pool(
        {
            connectionString: process.env.DATEBASE_URL,
            ssl: {rejectUnauthorized: false}
        }
    )
}else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'crown_405416032',
        password: '0000'
    })
}

module.exports = pool;
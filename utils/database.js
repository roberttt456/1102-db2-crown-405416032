const {Pool} = require('pg');
const {connectionString} = require("pg/lib/defaults");

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isProduction){
    pool=new Pool(
        {
            connectionString: process.env.DATEBASE_URL,
            ssl: {rejectUnauthorized: false}
        }
    )
}else {
    // local database

    pool =  new Pool({
        user: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'crown_405416032',
        password: '0000'
    })


    // heroku database
/*
    pool = new Pool({
        user: 'puwwcmzwgmvklz',
        host: 'ec2-54-83-21-198.compute-1.amazonaws.com',
        port: '5432',
        database: 'd5dsfn88cf4qjb',
        password: '668148c3f348c307ececaa8d527a196e6fb176e71c3603cfb413e03c30303ee1@'
    })
*/
}

module.exports = pool;
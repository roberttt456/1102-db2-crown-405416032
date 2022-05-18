const db = require("../utils/database");
const {static} = require("express");

const test = class test{
    constructor(id,as) {

    }

    static async fetchAll(){
        try{
            let results = await db.query('SELECT * from category_32');
            return results.rows;
        }catch (e) {
            console.log('err',e);
        }
    }

    static async fetchCat(){
        try{
            let results = await  db.query('SELECT * from category_32 WHERE name = $1',[name]);
            return results.rows[0].id;
        }catch (e) {
            console.log('err',e);
        }
    }

    static async fatchPro(id){
        const query = {
            text:'SELECT * from category_32 WHERE name = $1',
            value:[id]
        }
        try{
            let results = await db.query(query);
            return results.rows;
        }catch (e) {

        }
    }
}

module.exports= test;
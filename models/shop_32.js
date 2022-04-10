const db = require('../utils/database');

const shop_32 = class shop_32{
    //資料庫
    constructor(id, name, size, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;

    }

    //get all categories

    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from shop_32`);
            //console.log('results', JSON.stringify(results.rows));

            return results.rows;
        }catch (err){
            console.log('error',err)
        }


    }
}

//測試程式
const test = async function(){

    let results = await shop_32.fetchAll();
    console.log('test results',JSON.stringify(results));
}

//test();

module.exports = shop_32;
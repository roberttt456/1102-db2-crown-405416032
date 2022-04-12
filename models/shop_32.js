const db = require('../utils/database');

const shop_32 = class shop_32{
    //資料庫
    constructor(id, name, size, remote_url, local_url,price,cat_id) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.price=price;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.cat_id=cat_id;
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

    static async fetchPro(id){
        const query = {
            text:`SELECT * FROM shop_32 where cat_id = $1`,
            values:[id]
        }
        try{
            let results = await  db.query(query);
            return results.rows;
        }catch (err){
            console.log(err);
        }
    }
}


//測試程式
const test = async() =>{
    let results = await shop_32.fetchPro(1);
    console.log('test results',JSON.stringify(results));
}

test();

module.exports = shop_32;
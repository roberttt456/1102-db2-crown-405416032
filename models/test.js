/*
const{pool}=require('pg');
const {connection}=require("pg/lib/defaults");

const isp = process.env.NODE_ENV === 'production';

let pool;

if(isp){
    pool=new pool(

    )
}else {
    pool = new pool({
        user
        host
        port
        database
        password
    })
}

module.exports=pool;*/


var express = require('express');
var router = express.Router();
const Cat_32 = require("../models/Category_32");
const Shop_32 = require("../models/shop_32");
/* GET home page. */
router.get('/', function(req, res, next) {
    try{
        let result = Cat_32.fetchAll();
        console.log('result', JSON.stringify(result));
        res.render('crown2_32/index',{
            data: result,
            id: '',
            title: ''});
    }catch (e) {
        console.log('err');
    }
});

router.get('/shop/:category', async function (req, res, next) {
    console.log('category',req.params.category);
    try {
        const cid = await Cat_32.fetchCat(req.params.category);
        let result = await Shop_32.fetchPro(cid);
        console.log('result', JSON.stringify(result));
        res.render('crown2_32/product_32', {
            data: result,

            id: '',
            title: req.params.category
        });
    } catch (e) {
        console.log('err');
    }
});

module.exports = router;

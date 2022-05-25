const Category_32 = require("../models/Category_32");
const shop_32 = require("../models/shop_32");

// create
exports.createProducts = async (req,res)=>{
    console.log('body',req.body);
    try {
        let results = await shop_32.create(req.body);
        console.log('results',JSON.stringify(results));
        res.json({
            msg: 'create -- body data received',
            data: results,
        });
    }catch (e) {
        console.log('err',e)
    }
};


//read
exports.getCategories = async (req,res)=>{
    try {
        let results = await Category_32.fetchAll();
        console.log('results', JSON.stringify(results));
        res.render('crown2_32/index', {
            data: results,
            id: '405416032',
            title: 'crown2_32'});
    } catch (err) {
        console.log('err');
    }
};

exports.getProductsByCategory = async (req,res)=>{
    console.log('category',req.params.category)
    try {
        const cid = await Category_32.fetchCat(req.params.category);
        // console.log('cid',cid);
        let results = await shop_32.fetchPro(cid);
        console.log('results',JSON.stringify(results));

        res.render('crown2_32/product_32',{
            data: results,
            title: req.params.category,
            name: '黃嘉雄',
            id: '405416032'
        });
    } catch (err) {
        console.log('err');
    }
};
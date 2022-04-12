var express = require('express');
var router = express.Router();
const Category_32 = require("../models/Category_32");
const shop_32 = require("../models/shop_32")

/* GET home page. */
router.get('/', async function (req, res, next) {
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
});



// router.get('/shop_32/jackets',async function (req, res, next) {
//     //res.render('crown2_32/jackets', {title: 'Express'});
//     try {
//         let results = await shop_32.fetchAll();
//         console.log('results', JSON.stringify(results));
//         res.render('crown2_32/jackets', {
//             data: results,
//             id: '405416032',
//             title: 'crown2_32'
//         });
//     } catch (err) {
//         console.log('err');
//     }
// });

router.get('/shop_32/:category',async function (req, res, next) {
    console.log('category',req.params.category)
    try {
        const cid = await Category_32.fetchCat(req.params.category);
        console.log('cid',cid);
        const results = await shop_32.fetchPro(cid);
        console.log('results',JSON.stringify(results));
    } catch (err) {
        console.log('err');
    }
});
/*
<% for(let i=0;i<data.lenght;i++) { %>
<div class="<>">
<div class="bi" src="<%= data[i].local_url %> " alt="">

<% } %>
 */

module.exports = router;

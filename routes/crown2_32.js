var express = require('express');
var router = express.Router();
const Category_32 = require("../models/Category_32");
const shop_32 = require("../models/shop_32")
const crown2Controller_32 = require('../controllers/crown2Controller_32');

//create
router.post('/product_32',crown2Controller_32.createProducts);

/* GET home page. */
router.get('/', crown2Controller_32.getCategories);

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

router.get('/shop_32/:category',crown2Controller_32.getProductsByCategory);
/*
<% for(let i=0;i<data.lenght;i++) { %>
<div class="<>">
<div class="bi" src="<%= data[i].local_url %> " alt="">

<% } %>
 */

module.exports = router;


/*{
    "id":"50",
    "name":"hat1",
    "cat_id":"1",
    "price":"20.99",
    "remote_url":"https://i.ibb.co/XzcwL5s/black-shearling.png",
    "local_url":""
}*/
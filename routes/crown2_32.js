var express = require('express');
var router = express.Router();
const Category_32 = require("../models/Category_32");

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

/*
<% for(let i=0;i<data.lenght;i++) { %>
<div class="<>">
<div class="bi" src="<%= data[i].local_url %> " alt="">

<% } %>
 */

module.exports = router;

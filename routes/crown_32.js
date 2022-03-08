var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('crown_32/index', { id: '405416032',name:'黃嘉雄' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

const db = require('../utils/database');
/* GET home page. */
router.get('/', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM book_32');
        console.log('results', JSON.stringify(results.rows));
        res.render('book_32/index', {
            data: results.rows,
            id: '405416032',
            name: '黃嘉雄'
        });
    } catch (e) {
        console.log('error', e);
    }
});

router.get('/create', (req, res) => {
    res.render('book_32/add_32', {
        id: '405416032',
        name: '黃嘉雄'
    });
});

router.post('/create', async (req, res) => {
    console.log('body', req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try {
        const query = {
            text: `INSERT INTO book_32 (id, name, author, price)
                   VALUES ($1, $2, $3, $4)`,
            values: [id, name, author, price],
        }
        await db.query(query);
        res.redirect('/book_32');
    } catch (e) {
        console.log(e)
    }


});

module.exports = router;

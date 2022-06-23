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

router.get('/delete/:id', async (req, res) => {
    try {
        console.log('delete id', req.params.id);
        const query = {
            text: `DELETE
                   FROM book_32
                   WHERE id = $1`,
            values: [req.params.id],
        };
        const results = await db.query(query);
        res.redirect('/book_32');
    } catch (e) {
        console.log(e);
    }
});

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id',id);
    try {
        const query = {
            text: `SELECT * FROM book_32 WHERE id =$1`,
            values: [id],
        };
        const results = await db.query(query);
        data = results.rows;
        res.render('book_32/edit_32',{
            id: data[0].id,
            name: data[0].name,
            author: data[0].author,
            price: data[0].price,
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/update', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try {
        const query = {
            text: `UPDATE book_32 SET name = $1, author =$2, price=$3 WHERE id = $4`,
            values: [id, name, author, price],
        }
        await db.query(query);
        res.redirect('/book_32');
    } catch (e) {
        console.log(e)
    }


});

module.exports = router;

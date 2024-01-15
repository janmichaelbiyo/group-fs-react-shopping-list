const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get route to get all items
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "shoppingList";`;
    
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got shopping list back from database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});




//POST ROUTE
router.post('/', (req,res) => {
    console.log('POST req.body', req.body);
    let itemsQuery = 'INSERT INTO "shoppingList" ("name", "quantity", "unit") VALUES ($1, $2, $3)';

    pool.query(itemsQuery, [req.body.name, req.body.quantity, req.body.unit])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        res.sendStatus(500);
    });
});

//Exporting our router
module.exports = router;
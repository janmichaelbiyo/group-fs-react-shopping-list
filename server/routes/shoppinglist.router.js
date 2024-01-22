const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get route to get all items
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "shoppingList" ORDER BY "name" ASC;`;
    
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

// Delete Route

router.delete('/:id', (req,res) => {
    const shoppingId = req.params.id;
    const queryDeleteList = `DELETE FROM "shoppingList" WHERE "id" =$1;`;

    pool    
        .query(queryDeleteList, [shoppingId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('fix me i am delete', error);
            res.sendStatus(500);
        })
})

// Put

router.put('/:id', (req,res) => {
    const id = req.params.id;
    const itemsData = req.body
    const queryshoppingListUpdate = `UPDATE "shoppingList" SET "purchased" = NOT "purchased" 
    WHERE "id"= $1;`;
    
    pool
        .query(queryshoppingListUpdate, [id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('this is an error with put', error)
            res.sendStatus(500);
        })
    
})

router.delete('/', (req,res) => {
    // const shoppingId = req.params.id;
    const queryDeleteList = `DELETE FROM "shoppingList"`;

    pool    
        .query(queryDeleteList)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('fix me i am delete total', error);
            res.sendStatus(500);
        })
})

router.put('/', (req,res) => {
   
    const itemsData = req.body
    const queryshoppingListUpdate = 'UPDATE "shoppingList" SET "purchased" = False'
    
    pool
        .query(queryshoppingListUpdate)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('this is an error with put', error)
            res.sendStatus(500);
        })
    
})

//Exporting our router
module.exports = router;


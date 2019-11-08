const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');


//home route
router.get('/', (req, res) =>{
    console.log('Main route.')

    //let query = 'SELECT * FROM tbl_ ...'
    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        res.render('home', { something: result }); 
    })
})

router.get('/:var', (req, res) =>{
    console.log('Dynamic route.');
    console.log(req.params.id);

    //let query = 'SELECT * FROM tbl_ ...'
    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log('Data pulled: ', result[0]);
    })
    // render the home view with dynamic data
    res.json(result[0]);
})

module.exports = router;
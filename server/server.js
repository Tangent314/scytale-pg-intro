const express = require('express');
const pg = require('pg');
const Pool = pg.Pool;

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

//connect to the database
const config = {
    database: 'music_collection',
    host: 'Localhost',
    port: 5432,
};

const pool = new Pool(config);

app.get('/songs', (req,res) =>{
    // what should we do before we res.send?
    // make a select query to the database for list of songs
    // SELECT * FROM "songs";
    pool.query('SELECT * FROM "songs";')
        .then((result) => {
            // .then after the query is complete, res.send
            console.log(result);
            res.send(result.rows);
        });
    
});

app.post('/songs', (req, res) => {
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log(`litsening on port: ${PORT}`)
})
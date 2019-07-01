const express = require('express')
const app = express()
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmos'
});


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tourists', (req, res) => {

    con.query(`SELECT * FROM tourists`, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            res.json(result);
        }
    })
});

app.get('/flights', (req, res) => {
    con.query(`SELECT * FROM flights`, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            console.log(result);
        }
    })
})

app.get('/list', (req, res) => {
    const { id } = req.query;
    con.query(`SELECT * FROM list WHERE id_tourist=${id}`, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            console.log(id);
        }
    })
})


app.get('/removeTourist', (req, res) => {
    let { id } = req.query;
    console.log(id)
    con.query(`DELETE tourists, list FROM tourists LEFT JOIN list on tourists.id_tourist = list.id_tourist
    WHERE tourists.id_tourist = ${id}  `, (err, result) => {
            if (err) {
                res.json(false)

            }
            else {
                result = JSON.parse(JSON.stringify(result));
                res.json(true)
            }

        })

})


app.get('/removeFlight', (req, res) => {
    const { id } = req.query;
    con.query(`DELETE flights, list FROM flights LEFT JOIN list on flights.id_flight = list.id_flight
    WHERE flights.id_flight = ${id} `, (err, result) => {
            if (err) throw err;
            else {
                result = JSON.parse(JSON.stringify(result));
                console.log(id);
            }
        })
})

app.post('/addTourist', (req, res) => {
    console.log(req.body);
    const { name, surname, sex, country, note, data_of_birth } = req.body;
    con.query(`SELECT * FROM tourists WHERE name='${name}' AND surname='${surname}'`, (err, result) => {
        if (err) {
            res.json({ error: 'Database error' });
        }
        else {
            const count = JSON.parse(JSON.stringify(result)).length;
            console.log(count);
            if (count === 0) {
                con.query(`INSERT INTO tourists SET ?`, { name, surname, sex, country, note, data_of_birth }, (err, result) => {
                    if (err) throw err;
                    else {
                        result = JSON.parse(JSON.stringify(result));
                        res.json(req.body);
                    }
                })
            } else res.json({ error: 'Podaj inne dane' });

        }

    })
})

app.post('/addFlight', (req, res) => {
    const { data_outlet, data_arrive, place_number, price } = req.body;
    con.query(`INSERT INTO flights SET ?`, { data_outlet, data_arrive, place_number, price }, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            res.json(req.body);
        }
    })

})

app.post('/addList', (req, res) => {
    const { id_tourist, id_flight, place_number } = req.body;

    let choose = true;
    con.query(`SELECT * FROM list WHERE id_flight=${id_flight}`, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            result.forEach(item => {
                if (parseInt(item.id_tourist) === id_tourist) {
                    choose = false;
                }

            })
            console.log(result);
            const count = result.length;
            if (place_number > count && choose) {
                con.query(`INSERT INTO list SET ?`, { id_flight, id_tourist }, (err, result) => {
                    if (err) throw err;
                    else {
                        result = JSON.parse(JSON.stringify(result));
                        res.json(req.body);
                    }
                })
            }
        }
    })


})

app.post('/removeList', (req, res) => {
    const { id_tourist, id_flight } = req.body;
    con.query(`DELETE FROM list WHERE id_tourist=${id_tourist} AND id_flight=${id_flight}`, (err, result) => {
        if (err) throw err;
        else {
            result = JSON.parse(JSON.stringify(result));
            res.json(req.body);
        }
    })

})


app.listen(3500)
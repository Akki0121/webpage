var mysql = require("mysql");

const path = require('path');
// Import the required packages
const express = require('express');
//const mysql = require('mysql');
const bodyparser = require("body-parser");
// Create an Express application
const app = express();

var connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "hotel",
});
// Connect to the database
connection.connect((err) => {
    if(err) throw err;
    else console.log("connected succesfully.....");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).send("<h1>Ankit</h1>");
});

app.post('/input', (req,res)=> {
    const { hotelName , price} = req.body;

    const query = 'INSERT INTO table_no (table_Name , price) Values(?, ?)';
    const Values = [table1, 2500];

    connection.query(query,[ hotelName , price], (err, result) => {
        if(err)
        {
            throw Error;
        }

        res.send("data inserted sucessfully");
        console.log(result);
    });
});


app.post('/search', (req, res) => {
    const qer = 'SELECT * FROM hotel';
    connection.query(qer, (err, result) => {
        if(err) 
        {
            throw Error;
        }

        res.send("data from database");
        console.log(result);

    });
});
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

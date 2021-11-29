var mysql = require('mysql');  
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));  //enable cross origin requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var con = mysql.createConnection({   //create connection to the DB
  host: "localhost",
  user: "root",
  password: "ofri",
  database: "tripplane"
});


con.connect((err)=>{
  if(!err)
  console.log("DB connected");
  else
  console.log("DB cannot connect");
});


app.listen(3000,()=>console.log("Express server is runing on port 3000 .... waiting for events")); //The server is qaiting to event on port 3000

app.get('/login',(req, res)=>{
  con.query('SELECT * FROM login',(err,rows,_fields)=>{
    console.log(rows);
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

app.post('/register',(req, res)=>{
  var sql = 'INSERT INTO login (user,password) VALUES ?';
  var values =[[req.body.user,req.body.password]];
  con.query(sql,[values],(err,rows,_fields)=>{
    res.send("Respone: the registeration completed OK")
  })
});






const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Banco de dados
require('./database/database');

//View engine
app.set('view engine', 'ejs');

//Static Files

app.use('/public', express.static('public'));

//body barser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/",(req,res)=>{
    res.render("index");
});


app.listen(3000,()=>{
    console.log("Servidor rodando");
});
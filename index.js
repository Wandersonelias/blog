const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.get("/",(req,res)=>{
    res.send("teste rota");
});


app.listen(3000,()=>{
    console.log("Servidor rodando");
})
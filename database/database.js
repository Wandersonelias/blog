const sequelize = require('sequelize');
var Sequelize = require('sequelize');
var connection = new Sequelize('blog','wanderson','regina',{
   host: 'localhost',
   dialect: 'mysql' 
});

connection.authenticate().then(()=>{
    console.log('Conectado com sucesso!');
}).catch((err)=>{
    console.log("Error: " + err);
});

module.exports = connection;
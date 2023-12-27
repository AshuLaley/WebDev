const mysql = require("mysql");
var mysqlconnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:3306,
    database:'b1db'
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occured",err);
    }else{
        console.log("connection done")
    }
})

module.exports = mysqlconnection;
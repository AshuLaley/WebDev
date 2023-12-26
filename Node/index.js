var express = require("express");
const app = express();
const bodyparser = require("body-parser");


app.use(function(req,resp,next){
    console.log("In the First Middleware!!");
    next();
})

app.use(function(req,resp,next){
    console.log("In the Second Middleware!!");
    next();
})


app.get("/", function(req,resp){
    resp.send("<h1> Helloooo First Node JS Project!! </h1>");
})

app.listen(1200,function(req,resp){
    console.log("Server is running on port 8000");
})
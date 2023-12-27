var express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

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

app.get("/login", function(req,resp){
    resp.sendFile("/public/login.html",{root:__dirname});
})

app.post("/validate", function(req,resp){
    resp.send("hahahaha   Email:"+req.body.email+", Password:"+req.body.password);
})

app.listen(1200,function(req,resp){
    console.log("Server is running on port 1200");
})
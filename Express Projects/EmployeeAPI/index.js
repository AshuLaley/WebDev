// const express = require("express")
import express from "express"
const app = express();
import {getEmps,getEmp,createEmp,deleteEmp,updateEmp} from "./database.js"
app.get("/api/employee",(req,res)=>{
    var data = getEmps();
    res.send(data)
})
app.post("/api/employee",(req,res)=>{
    var {name,age} = req.body;
    var data = createEmp(name,age);
    res.send(data)
})

app.listen(8080,function(){
    console.log("server is up and running on port 8080")
})
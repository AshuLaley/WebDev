import express from "express"  //because in package.json I used   "type":"module"
// var express = require("express");  
import {getNotes,getNote,createNote} from './database.js';
const app = express();


app.use(express.json());

app.use((err,req,res,next) => {
    console.log(`Error Happend ${err}`);
    res.status(500).send('SOmething Broke!!');
})


app.get("/notes", function(req,resp){
    resp.send("<h1> This should be notes!! </h1>");
})

app.get("/notes/:id", async function(req,resp){
    const id = req.params.id;
    const notes = await getNote(id);
    resp.send(notes)
})

app.post("/notes",async function(req,res){
    const {title,contents} = req.body
    const note = await createNote(title,contents)
    res.send(note)
})



app.listen(1200,function(req,resp){
    console.log("Server is running on port 1200");
})
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err ? err: "connected to database")
})
// initiating
var app = express()

// middleware
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3k')
})
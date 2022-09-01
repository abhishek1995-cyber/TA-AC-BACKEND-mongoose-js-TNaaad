var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
const { application } = require('express');

// connect to database

mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err? err: "connected")
})

// intiate the app
var app = express()
// middleware

app.use(logger("dev"));
app.use(express.json());

// routes

app.get("/",(req,res)=>{
    res.send('welcome')
})


// listener

app.listen(3000,()=>{
    console.log('listening to port 3k')
})

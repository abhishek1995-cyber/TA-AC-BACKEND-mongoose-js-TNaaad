var express = require('express');
var logger = require('morgen');
var mongoose = require('mongoose');

//  connect to data base
mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err? err : "connected to database")
})


// intiating 

var app = express();

// middleware
app.use(express.json());
app.use(logger('dev'));

// routes

app.get('/',(req,res)=>{
    res.send('welcome')
});

// error
app.use((err,req,res,next)=>{
    res.send(err)
})


// listener
app.listen(4000,()=>{
    console.log('listening to 4k')
})
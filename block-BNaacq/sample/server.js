var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');
var Article = require('./models/articles');
var Comment = require('./models/comment');

// connect to database

mongoose.connect("mongodb//:localhost/blog",(err)=>{
    console.log(err? err: "connected")
});

// instiating the app

var app = express();

// middleware 



// routes


app.get("/",(req,res)=>{
    res.send('welcome')
})

// listener

app.listen(3000,()=>{
    console.log('listening ton port 3k')
})
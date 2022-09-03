var express = require("express");
var mongoose = require('mongoose');
var user = require('./models/user')

// connecting to database

mongoose.connect("mongodb://localhost/sample",(err)=>{
    console.log(err? err: "connected database")
})

// instiating the app
var app = express();


// middleware
app.use(express.json());



// routes
app.post("/users",(req,res)=>{
    // save data to database
user.create(req.body,(err,User)=>{
    res.json(User)
   })
})

app.get("/users",(req,res)=>{
    user.find({},(err,User)=>{
     console.log(err,User);
     res.json({User: User})

    })
})

// query a single document(user) using mongoose

app.get("/users/:id",(req,res)=>{
    var id = req.params.id;
  user.findById(id,(err,User)=>{
        res.json(User)
    });
    user.findOne({ _id: id }, (err, User) => {
        res.json(User);
      })
})

// Update a user

app.put('/users/:id',(req,res)=>{
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body,{new:true},(err,updateduser)=>{
        res.json(updateduser)
    })
    // user.findOneAndUpdate({"email": "abhishekzadav@gmail.com"},req.body,{new:true},(err,updateduser)=>{
    //     res.json(updateduser)
    // })
})


// delete

app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id, (err, deleteduser) => {
      res.send(`${deleteduser.name} is Deleted successfully`);
    });
  });


app.get('/',(req,res)=>{
    res.send('welcome')
})



// listener 
app.listen(3000,()=>{
    console.log('listening to port 3k')
})
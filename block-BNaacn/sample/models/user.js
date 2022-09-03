var mongoose = require('mongoose');
var schema = mongoose.Schema

var userschema = new schema({
    name:String,
    email:String,
    age:Number
});

userschema = new schema({
    nsme:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0}
});

userschema = new schema({
    nsme:String,
    email:{type:String, lowercase:true},
    age:{type:Number, default:0},
    password:{type:String,minlength:5},
    createdAt:{type:Date,default: new Date()},
    favourite:[String]
},{ timestamps: true });

let user = mongoose.model('user',userschema);
module.exports = user;
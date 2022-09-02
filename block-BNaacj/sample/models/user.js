var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userschema = new schema({
    password: { type: String, minlength: 5, maxlength: 15},
    createdAt: {type:Date, dafault: 2/09/2022}
},{timestamps:true})
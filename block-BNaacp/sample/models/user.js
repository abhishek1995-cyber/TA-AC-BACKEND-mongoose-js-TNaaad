var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name:String,
    email:String,
    sports:[String]
});

var user = mongoose.model("user",userSchema);
module.exports = user;

var mongoose = require('mongoose')
var schema = mongoose.Schema;

let userSchema = new schema({
    name:String,
    email:String,
    age:{type:Number, min:18}
})

let User = mongoose.Model("User",userSchema);
module.exports = User;
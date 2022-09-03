var mongoose = require('mongoose')
var schema = mongoose.Schema;

let articleSchema = new schema({
    title: {type:String, required:true},
    description:String,
    tags:String,
    likes:{type:Number, default:0},
    author:schema.Types.ObjectId,
    comments:schema.Types.ObjectId
},{timestamps:true})

let Article = mongoose.Model("User",articleSchema);
module.exports = Article;

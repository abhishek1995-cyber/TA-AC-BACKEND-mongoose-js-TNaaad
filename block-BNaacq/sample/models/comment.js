var mongoose = require('mongoose')
var schema = mongoose.Schema;

let commentSchema = new schema({
    content:{type:String, required:true},
    author :schema.Types.ObjectId,
    article:schema.Types.ObjectId
},{timestamps:true})

let Comment = mongoose.Model("Comment",commentSchema);
module.exports = Comment;
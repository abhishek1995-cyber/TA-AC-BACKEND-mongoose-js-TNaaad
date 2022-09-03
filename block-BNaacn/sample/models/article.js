var mongoose = require('mongoose');
var schema = mongoose.Schema

var articleschema = new schema({
    title: String,
    description:String,
    tags:[string],
    createdAt: {type:Date, default: new Date()},
    likes:{type:Number,default:0}
},{ timestamps: true });

let article = mongoose.model('article',articleschema);
module.exports = article;
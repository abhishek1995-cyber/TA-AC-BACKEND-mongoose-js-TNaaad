var mongoose = require('mongoose'); 
var Schema = mongoose.schema; 

var userSchema = new Schema({
    village: String,
    city: String,
    state:String,
    pin: Number,
    user: Schema.Types.objectId,
    favouritesfield: [String],
    marksfield: [Number]
}); 


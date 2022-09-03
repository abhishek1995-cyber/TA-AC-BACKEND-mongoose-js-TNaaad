var mongoose = require('mongoose');
var schema = mongoose.Schema;

var addressschema = new schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:schema.Types.ObjectId
},{ timestamps: true });

 addressschema = new schema({
    village:String,
    city:{type:String,required:true},
    state:{type:String, required:true},
    pin:Number,
    user:schema.Types.ObjectId
},{ timestamps: true });

let address = mongoose.model('address',addressschema);
module.exports = address
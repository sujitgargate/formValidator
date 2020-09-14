var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String, 
    email : {type : String, unique : true}, 
    DOB : {type : Date}, 
    Age : {type : Number},
    isDeleted : {type : Boolean, default : false}
},{
    timestamps : true
})

module.exports = mongoose.model('UserData', userSchema);
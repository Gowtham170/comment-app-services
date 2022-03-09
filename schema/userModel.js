const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true, select: false},
    secret: {type:String, required: true},
    comments: [String]
}); 

const userModel = mongoose.model('userModel', userSchema); 

module.exports = userModel;

var mongoose = require('mongoose');

module.exports = mongoose.model('User' ,{
    index: String,
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,

});


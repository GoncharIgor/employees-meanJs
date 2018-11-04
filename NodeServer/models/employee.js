const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
    avatar: {type: String},
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});
//if I use it, it will add O to Employee+(s - plural) collection
//3-rd parameter, after O, will specify explicitly the name of collection

module.exports = {Employee};
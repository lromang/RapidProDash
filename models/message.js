var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Message Schema
var MessageSchema = new Schema({
    text: String,
    time: Date
});

module.exports = mongoose.model('Message', MessageSchema);

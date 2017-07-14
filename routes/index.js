var express = require('express');
var router = express.Router();
// Mongo
var mongooose = require('mongoose');
mongooose.connect('mongodb://localhost/RapidProDash')

// Loading message model
var Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Test Register
    var message  = new Message();
    message.text = 'Hola Mundo';
    message.time =  new Date();
    message.save();
  res.render('index', { title: 'Dashboard' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');
var json2csv = require('json2csv'); //export -> csv
var fs = require('fs'); //read/write files
var db_conf = require('../db_conf');
// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
var flash = require('connect-flash');
router.use(flash());

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
var bCrypt = require('bcrypt-nodejs');

router.use(expressSession({secret: 'mySecretKey', resave : false , saveUninitialized: false}));
router.use(passport.initialize());
router.use(passport.session());
var LocalStrategy = require('passport-local').Strategy;

module.exports = router;

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '', message : req.flash('message') });
});

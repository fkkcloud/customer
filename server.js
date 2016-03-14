// modules =================================================
var express        = require('express');
var app            = express();
var server         = require('http').createServer(app);
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// config files, connecting mongodb
var db = require('./config/db');

var port = process.env.PORT || 5000; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride()); // 'X-HTTP-Method-Override' override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

app.use('/app', express.static(__dirname + '/ex_app'));
app.use('/game', express.static(__dirname + '/ex_game'));
// routes ==================================================

//require('./server_api/app')(app); 

// start app server ===============================================
server.listen(port);

console.log('Magic happens on web server port ' + port); 			// shoutout to the user
exports = module.exports = app; 									// expose app
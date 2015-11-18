process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
// var express = require('express');
// var mongoose = require('mongoose');
// var app = express();
//
// app.get('/', function(req, res) {
//   res.send('Hello World');
// });
//
// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//
//   console.log('Express server listening at http://%s:%s', host, port);
// });

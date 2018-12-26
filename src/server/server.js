/* Create a http server */
//console.log('Testing...');
var express = require('express');
var app = express();
var server = require('http').Server(app);

var port = process.env.PORT || '3060';
server.listen(port, '0.0.0.0');
console.log('Server listening on port' + port)




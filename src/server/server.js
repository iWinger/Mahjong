/* Create a http server */
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end();
});

server.listen(10, '192.30.252.153');
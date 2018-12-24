/* Create a http server */
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('Hello <strong>world!</strong><br/> From Mahjong Company!');
	res.end();
});

server.listen(10, '192.30.252.153');
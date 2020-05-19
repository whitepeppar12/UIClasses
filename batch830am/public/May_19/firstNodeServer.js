var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<b>hello every one 1234</>");
	response.end();
});

server.listen(8081, function(){
	console.log("server is listing at 8081")
});


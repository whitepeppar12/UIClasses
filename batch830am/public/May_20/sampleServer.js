var http = require("http");

var server = http.createServer(function(req, res){
	var data = {msg: "hello"};
	data = JSON.stringify(data);   //json.parse
	res.write(data);
	res.end();
});

server.listen(8081, function(){
	console.log("Server listing at 8081");
})
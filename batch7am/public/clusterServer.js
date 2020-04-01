var http = require("http");
var cluster = require("cluster");


const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
		console.log("created server " + i)
	}
} else {
	var server = http.createServer(function(req, res){
		console.log("the process from which it got response is " + process.pid);
		res.end("hello process is " + process.pid);
	}); 


	server.listen(8080, function(){
		console.log("server is listing at 8080 with process id " + process.pid);
	});
}


var http = require("http");
var os = require("os");
var noOfClusters = os.cpus().length;
var cluster = require("cluster");

if (cluster.isMaster) {
	for (var i = 0 ; i < noOfClusters; i++) {
		cluster.fork();		
	}
} else {


	var server = http.createServer(function(req, res){
		res.end("its done, server is available " + process.pid);
	});


	server.listen(8082, function(){
		console.log("Server is listing at 8082");
	})
}
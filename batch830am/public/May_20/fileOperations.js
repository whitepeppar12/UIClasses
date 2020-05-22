var http = require("http");
var fs = require("fs");


var server = http.createServer(function(req, res){

	/*fs.readFile("sample.txt", function(err, data){
		res.write(data);
		res.end();
	}); */
	var data = {
		name:"Neha",
		age: 10,
		gender:"Female"
	};

	data = JSON.stringify(data);
	fs.appendFile("sample1.txt",data ,function(err){
		res.write("data written sussfly");
		res.end();
	});	
});

server.listen(8081, function(){
	console.log("server is listing at 8081");
})
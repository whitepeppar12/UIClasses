var express = require("express");

var app = express();

app.get('/getdata', function(req, res){
	res.send("hello am a eprss server");
});

app.listen(8081, function(){
	console.log("server i slisting at 8081");
});
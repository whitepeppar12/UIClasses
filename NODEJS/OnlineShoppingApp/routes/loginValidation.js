var express = require("express");

var router = express.Router();

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017";

router.post("/", function(req, res){
	req.session.isUserValid = false;	
	var data = {};
	mongoClient.connect(url, function(err, client){
		if (err) {
			console.log("error while connecting")
			console.log(err);
		}
		var db = client.db("onlineshopping");
		var collection = db.collection("userlist");
		collection.find({userid: req.body.id, "pwd": req.body.pwd}).toArray(function(err, items){
			if (items.length == 1) {
				data.msg = "Valid";
				req.session.isUserValid = true;
			} else {
				data.msg = "Invalid";
				req.session.isUserValid = false;
			}
			console.log(req.session.isUserValid)
			data = JSON.stringify(data);
			client.close();
			res.send(data);
		})
	});
});


module.exports = router;
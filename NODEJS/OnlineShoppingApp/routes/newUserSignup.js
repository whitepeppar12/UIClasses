var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body);
	var data = {};

	mongoClient.connect(url, function(err, client){
		var db = client.db("onlineshopping");
		var collection = db.collection("userlist");
		// check where we arelrdy ahave  auser with same id or not
		// collection.find({userid: '...'}). 1
		collection.insert(req.body, function(err){
			if (err) {
				data.msg = "Error";
			} else {
				data.msg = "success";
			}
			client.close();
			res.send(JSON.stringify(data));
		});	
	});
});

module.exports = router;

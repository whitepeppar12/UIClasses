var express = require("express");
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var router = express.Router();
var url = 'mongodb://localhost:27017/onlineshopping';


router.post("/", function(req, res, next){

	mongoClient.connect(url, function(err, db) {
		console.log(db);
		var collection = db.collection("userlist");
		collection.find().toArray(function(err, doc){
			console.log("docs");
			console.log(doc);
		})
		console.log("succsfly connected");

		res.send("data");
	})
	
});

module.exports = router;
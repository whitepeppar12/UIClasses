var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {};
	mongoClient.connect(url, function(err, client){
		var db = client.db("onlineshopping");
		var collection = db.collection("productDetails");
		collection.delete({id:"abc"});
		collection.insert(req.query, function(err){
			if (err) {
				data.msg = "error while inserting";
			} else {
				data.msg = "Succsfly added product";
			}
			data = JSON.stringify(data);
			client.close();
			res.send(data);
		});
	});	
});

module.exports = router;

var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

var dbUrl = 'mongodb://localhost:27017';
var dataBase = "SchoolMngmnt";
var loginCollection = "LoginDetails";

/* GET home pagequery. */
router.post('/', function(req, res, next) {
	var data = {
		msg: 'invalid'
	};
	MongoClient.connect(dbUrl, function(err, client){
		var db = client.db(dataBase);

		
		var collection = db.collection(loginCollection);
		collection.find(req.body).toArray(function(err, details){
			
			if (details.length) {
				data.msg = 'Valid';
			}
			data = JSON.stringify(data);
			res.send(data);
			client.close();
		});
		
	});
	
});

module.exports = router;

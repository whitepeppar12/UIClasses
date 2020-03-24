var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017';


/* GET home pagequery. */
router.get('/', function(req, res, next) {

	MongoClient.connect(url, function(err, client) {
		var db = client.db("SchoolMngmnt");


		var collection = db.collection('StudentDetails');

		
		collection.find({}).toArray(function(err, details) {
			console.log("details");

			console.log(details);

			var data = {
				sdetails: details
			};



			data = JSON.stringify(data);
			res.send(data);
			client.close();
		});
		
	});
	
	
});

module.exports = router;

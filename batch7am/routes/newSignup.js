var express = require('express');
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;

var dbUrl = 'mongodb://localhost:27017';

/* GET home pagequery. */
router.post('/', function(req, res, next) {
	console.log(req.body);

	var data = {msg: ''};
	MongoClient.connect(dbUrl, function(err, client){
		if (err) {
			data.msg = "Error while connecting to database";
		}
		var db = client.db("SchoolMngmnt");
		var collection = db.collection("LoginDetails");

		collection.find({id: req.body.id}).toArray(function(err, details){
			if (details.length) {
				// there is a user with same id
				data.msg = "There is a user with same is, please choose another id";
					data = JSON.stringify(data);
					res.send(data);
					client.close();
			} else {
				collection.insert(req.body, function(err){
					if (err) {
						data.msg = 'Error while inserting data to collection'
					}
					data.msg = 'Data Inserted';
					data = JSON.stringify(data);
					res.send(data);
					client.close();
				});
			}

		});		
	});	
});

module.exports = router;



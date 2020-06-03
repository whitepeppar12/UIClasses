var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var router = express.Router();
var url = "mongodb://localhost:27017";

router.get("/", function(req, res, next){
	console.log("req.session");
	console.log(req.session);
	console.log("req.session.isUserValid")
	console.log(req.session.isUserValid)
	var data = {
		
	};
	if(req.session.isUserValid) {
		mongoClient.connect(url, function(err, client){
			var db = client.db("onlineshopping");
			var collection = db.collection("productDetails");
			collection.find().toArray(function(err, result){
				console.log(result);
				data.pDetails = result;
				data = JSON.stringify(data);

				res.send(data);
				client.close();
			})		
		});
	} else {
		data.msg = "user not logged In";
		data = JSON.stringify(data);
		res.send(data);
	}

	/*if (req.query.key) {
		var temp ={
			pDetails: []
		};
		for (var i = 0 ; i < data.pDetails.length; i++) {
			if (data.pDetails[i].name == req.query.key) {
				temp.pDetails.push(data.pDetails[i]);
			}
		}
		data = temp;
	}*/

	

});

module.exports = router;
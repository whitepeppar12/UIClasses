var express = require("express");

var router = express.Router();

router.get("/", function(req, res, next){
	var data = {
		sDetails: [
			{
				name: "raj",
				age: 20,
				gender: "Male"
			},
			{
				name: "TEena",
				age: 20,
				gender: "Female"
			},
			{
				name: "PRasad",
				age: 50,
				gender: "Male"
			}
		]
	};

	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;
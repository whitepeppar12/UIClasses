var express = require("express");

var router = express.Router();

router.post("/", function(req, res, next){
	//  - get communiction console.log(req.query);
	console.log(req.body);
	var data = {};
	if (req.body.id == 'admin' && req.body.pwd == "india")  {
		data.msg = "Valid";
	} else {
		data.msg = "Invalid";
	}
	

	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;
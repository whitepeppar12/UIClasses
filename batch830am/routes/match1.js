var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var data = {
		title: "Match 1",
		date: new Date(),
		location: 'India, Hyderabad',
		venue: 'ABC Stadium',
		overs: 50,
		mType: 'One Day International',
		betweenCntry: 'India vs Australia'
	};

	data = JSON.stringify(data);
	setTimeout(function(){
		res.send(data);
	}, 500);
});

module.exports = router;

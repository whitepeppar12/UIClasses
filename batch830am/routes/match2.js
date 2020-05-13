var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var data = {
		title: "Match 2",
		date: new Date(),
		location: 'India, Delhi',
		venue: 'TEST great Stadium',
		overs: 'N/A',
		mType: 'Test Match',
		betweenCntry: 'India vs Newzland'
	};

	data = JSON.stringify(data);

	setTimeout(function(){
		res.send(data);
	}, 2000);
});

module.exports = router;

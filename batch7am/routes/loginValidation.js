var express = require('express');
var router = express.Router();

/* GET home pagequery. */
router.post('/', function(req, res, next) {

	var data = {
		msg: 'invalid'
	};
	if (req.body.id == 'admin' && req.body.pwd == 'india') {
		data.msg = 'Valid';
	}
	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;

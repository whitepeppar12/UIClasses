var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	req.session.isUserValid = false;
  	var data = {
  		msg: 'got loggedout succesfly'
  	}
  	res.send(JSON.stringify(data));
});

module.exports = router;

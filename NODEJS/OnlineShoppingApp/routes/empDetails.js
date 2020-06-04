var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var details = {
		name: "PRasad",
		age: 50,
		gender : "MAle",
		location: "Hyderabad",
		sal: 10000,
		dep: "IT"
	};
	//empData = JSON.stringify(empData);
	//res.send(empData);
  //res.render('index', { title: 'Express' });


  	res.render("empdata", details);
});

module.exports = router;

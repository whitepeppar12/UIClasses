var express = require('express');
var router = express.Router();

/* GET home pagequery. */
router.get('/', function(req, res, next) {

	
	var data = {
		sDetails: [
			{
				name: 'RAJ',
				age: 20,
				gender: 'Male',
				location: 'Hyderbad',
				picture: ''
			},
			{
				name: 'Teena',
				age: 20,
				gender: 'Female',
				location: 'Pune',
				picture: ''
			},
			{
				name: 'Krish',
				age: 22,
				gender: 'Male',
				location: 'Mumbai',
				picture: ''
			},
			{
				name: 'Meena',
				age: 15,
				gender: 'Female',
				location: 'Delhi',
				picture: ''
			},
			{
				name: 'Prasad',
				age: 20,
				gender: 'Male',
				location: 'Hyderbad',
				picture: ''
			}
		]
	};
	data = JSON.stringify(data);
	res.send(data);
});

module.exports = router;

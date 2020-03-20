var express = require('express');
var router = express.Router();

/* GET home pagequery. */
router.get('/', function(req, res, next) {
	var data = {
		productDetails: 
	[	
		{
			productName: 'Laptop',
			price: '$2000',
			manu: 'Lenova',
			seller: 'Indian Electronics',
			rating: '3/5'
		},
		{
			productName: 'Laptop',
			price: '$2000',
			manu: 'Lenova',
			seller: 'Indian Electronics',
			rating: '3/5'
		},
		{
			productName: 'Laptop',
			price: '$2000',
			manu: 'Lenova',
			seller: 'Indian Electronics',
			rating: '3/5'
		}
	]}
	//data = JSON.stringify(data);
	//res.send(data);
	res.render('productData', data);
});

module.exports = router;

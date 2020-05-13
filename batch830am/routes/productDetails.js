var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		"productDetails": [
			{
				"name": "Laptop",
				"price": "$456",
				"manu": "Samsung",
				"discount": "%15",
				"imgUrl": "https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png",
				images: ["one.png", "two.png", "three.png"],
				comments: [
					{
						name: "abc",
						rating: '4/5',
						des: "Its very good"
					}
				]
			},
			{
				"name": "Mobile",
				"price": "$129",
				"manu": "HTC",
				"discount": "%15",
				"imgUrl": "https://img.etimg.com/thumb/width-640,height-480,imgsize-587039,resizemode-1,msid-71641818/ecommerce-may-soon-lose-mobile-exclusivity.jpg"
			},
			{
				"name": "Pendrive",
				"price": "$200",
				"manu": "Toshiba",
				"discount": "%15",
				"imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41g8qWL2z-L._SL1000_.jpg"
			},
			{
				"name": "Masks",
				"price": "Rs.10",
				"manu": "Reddy Labs.",
				"discount": "%15",
				"imgUrl": "https://specials-images.forbesimg.com/imageserve/5e9dbb5c736d170006fed032/960x0.jpg?fit=scale"
			}
		]
	};


	data = JSON.stringify(data);
	//data = "parseEmpData(" + data + ")";
	setTimeout(function(){
		res.send(data);
	}, 5000)
	
});

module.exports = router;

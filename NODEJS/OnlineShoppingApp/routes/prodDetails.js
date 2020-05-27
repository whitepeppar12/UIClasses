var express = require("express");

var router = express.Router();

router.get("/", function(req, res, next){
	console.log(req.query);
	var data = {
		pDetails: [
			{
				name: "Laptop",
				price: 'Rs. 45000',
				manu: "Dell",
				discount: '10%',
				mainimageUrl: "https://images.anandtech.com/doci/14726/Galaxy-Book-S-Product-Images-678_678x452.jpg",
				sellerDetails: 'INDIAN electronics'
			},
			{
				name: "Pendrive",
				price: 'Rs. 3000',
				manu: "MAx",
				discount: '4%',
				mainimageUrl: "https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/13/7E/e59e7a3a-adc3-4841-a51e-9af4d0ff698f.gif",
				sellerDetails: 'INDIAN electronics'
			},
			{
				name: "Laptop",
				price: 'Rs. 45000',
				manu: "Dell",
				discount: '10%',
				mainimageUrl: "https://images.anandtech.com/doci/14726/Galaxy-Book-S-Product-Images-678_678x452.jpg",
				sellerDetails: 'INDIAN electronics'
			},
			{
				name: "Mobile",
				price: 'Rs. 30000',
				manu: "Samsung",
				discount: '19%',
				mainimageUrl: "https://cdn.shopclues.com/images1/thumbnails/102617/320/320/147643276-102617338-1567415197.jpg",
				sellerDetails: 'Raj Electronics'
			},
			{
				name: "Harddisk",
				price: 'Rs. 12000',
				manu: "Microtec",
				discount: '13%',
				mainimageUrl: "https://5.imimg.com/data5/XA/ZO/ZF/SELLER-55320671/hard-disk-500x500.jpg",
				sellerDetails: 'Super electronics'
			}
		]
	};

	if (req.query.key) {
		var temp ={
			pDetails: []
		};
		for (var i = 0 ; i < data.pDetails.length; i++) {
			if (data.pDetails[i].name == req.query.key) {
				temp.pDetails.push(data.pDetails[i]);
			}
		}
		data = temp;
	}

	data = JSON.stringify(data);

	res.send(data);

});

module.exports = router;
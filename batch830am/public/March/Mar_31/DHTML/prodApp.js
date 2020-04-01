var details = [
	{
		name: "Laptop",
		price: '$456',
		manu: 'Samsung',
		discount: '%15',
		imgUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
	},
	{
		name: "Laptop",
		price: '$456',
		manu: 'Samsung',
		discount: '%15',
		imgUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
	},
	{
		name: "Laptop",
		price: '$456',
		manu: 'Samsung',
		discount: '%15',
		imgUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
	},
	{
		name: "Laptop",
		price: '$456',
		manu: 'Samsung',
		discount: '%15',
		imgUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
	}
];


function showProductDetails(productData) {
	

	var ulTag = document.createElement("ul");
	ulTag.setAttribute("class", "details");
	

	var li1 = document.createElement("li");
	li1.innerText = "Prodcut  Name: " + productData.name;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerText = "Product Price: " + productData.price;
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerText = "Product Manufacture: " + productData.manu;
	ulTag.append(li3);


	var li4 = document.createElement("li");
	li4.innerText = "Discount: " + productData.discount;
	ulTag.append(li4);

	var li5 = document.createElement("li");
	var imgTag = document.createElement("img");
	imgTag.setAttribute('src', productData.imgUrl);
	li5.append(imgTag);
	ulTag.append(li5);

	document.querySelector(".container").append(ulTag);
}

function loadProductDetails() {
	for (var i = 0 ; i < details.length; i++) {
		showProductDetails(details[i]);
	}
}

loadProductDetails();
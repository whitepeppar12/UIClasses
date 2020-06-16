var data = [
	{
		name: "LAPTOP",
		price: 45000,
		manu: 'Samsung',
		imagePath: 'https://static.toiimg.com/photo/62202302/Samsung-NP900X3N-K03US-Laptop-Core-i7-7th-Gen8-GB256-GB-SSDWindows-10.jpg'
	},
	{
		name: "Mobile",
		price: 23000,
		manu: 'Moto',
		imagePath: 'https://www.bajajfinserv.in/5_Best_Redmi_Phones_Under_Rs15000_img1_redmi-cluster790x345-min.jpg'
	},
	{
		name: "Pendrive",
		price: 1300,
		manu: 'Toshiba',
		imagePath: 'https://images-na.ssl-images-amazon.com/images/I/41g8qWL2z-L._SL1000_.jpg'
	},
	{
		name: "LAPTOP",
		price: 45000,
		manu: 'Lenova',
		imagePath: 'https://static.toiimg.com/photo/62202302/Samsung-NP900X3N-K03US-Laptop-Core-i7-7th-Gen8-GB256-GB-SSDWindows-10.jpg'
	},
	{
		name: "Book",
		price: 120,
		manu: 'Samsung',
		imagePath: 'https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612'
	}
];

function addProduct(pData) {
	var divTag = document.createElement("div");
	divTag.setAttribute("class", "details");
	
	var ulTag = document.createElement("ul");

	var li1 = document.createElement("li");
	li1.innerHTML = "<b>Product Name: " + pData.name + "</b>";
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerText = "Product Price " + pData.price ;
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerText = "Manufacturer :" + pData.manu;
	ulTag.append(li3)

	var li4 = document.createElement("li");
	var imgtag  = document.createElement("img");
	imgtag.setAttribute("src", pData.imagePath);
	li4.append(imgtag);
	ulTag.append(li4);

	divTag.append(ulTag);

	document.querySelector(".container").append(divTag);


}

function showProductDetails() {
	for (var i = 0 ; i < data.length; i++) {
		addProduct(data[i]);
	}
}


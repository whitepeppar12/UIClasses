var data = [];

function addProduct(pData) {
	// var divTag = document.createElement("div");
	var divTag = $("<div></div>");
	divTag.addClass("details");
	
	var ulTag = $("<ul></ul>");

	var li1 = $("<li></li>");
	li1.html("<b>Product Name: " + pData.name + "</b>");
	ulTag.append(li1);

	var li2 = $("<li></li>");
	li2.text("Product Price " + pData.price);
	ulTag.append(li2);

	var li3 = $("<li></li>");
	li3.text("Manufacturer :" + pData.manu);
	ulTag.append(li3)

	var li4 = $("<li></li>");
	var imgtag  = $("<img />");
	imgtag.attr("src", pData.imagePath);
	li4.append(imgtag);

	ulTag.append(li4);

	divTag.append(ulTag);

	$(".container").append(divTag);
}

function showProductDetails() {
	for (var i = 0 ; i < data.length; i++) {
		addProduct(data[i]);
	}
}
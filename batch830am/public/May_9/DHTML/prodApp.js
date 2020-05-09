var details = [];


function showProductDetails(productData) {

	/*var ulTag = document.createElement("ul");
	ulTag.setAttribute("class", "details"); */

	var ulTag = $("<ul></ul>").addClass("details");
	

	var li1 = jQuery("<li></li>").text("Prodcut  Name: " + productData.name);
	ulTag.append(li1);

	var li2 = $("<li></li>").text("Product Price: " + productData.price);
	ulTag.append(li2);

	var li3 = $("<li></li>").text("Product Manufacture: " + productData.manu);
	ulTag.append(li3);


	var li4 = $("<li></li>").text("Discount: " + productData.discount);
	ulTag.append(li4);

	var li5 = $("<li></li>");
	var imgTag = $("<img />").attr('src', productData.imgUrl);
	li5.append(imgTag);
	ulTag.append(li5);

	$(".container").append(ulTag);
}

function getProductData(){
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/get/data/productdetails',
		method: 'GET',
		dataType: 'JSON',
		/*dataType: 'JSONP',
		crossDomain: true,
		jsonpCallback: 'parseEmpData', */
		success: function(res) {
			$(".loadingBlock").hide();
			loadProductDetails(res.productDetails);
		},
		error: function(err) {
			console.log("error");
			//document.querySelector(".errBlock").style.display = 'block';
			$(".loadingBlock").hide();
			$(".errBlock").show();
		}
	})
}

function loadProductDetails(details) {

	for (var i = 0 ; i < details.length; i++) {
		showProductDetails(details[i]);
	}
}

$(document).ready(function() {
	$("#btnElement").on("click", () => {
		getProductData();
	});
})

var details = [];


function showProductDetails(productData) {
	
	$(".container").loadTemplate( $("#prodTmplt"), productData, {append:true} );
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


function closePopup() {
	$(".maskBlock").hide();
	$(".popupContent").hide();
}

function showProdDetailsPopUp(event) {
	$(".maskBlock").show();
	$(".popupContent").show();
	$(".popupContent").loadTemplate( $("#prodDetailsTmplt"), {});
}
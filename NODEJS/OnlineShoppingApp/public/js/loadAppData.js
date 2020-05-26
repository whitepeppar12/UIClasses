function getProductData() {
	var url = "http://localhost:8081/product/details";

	var dataReq = $.ajax({
		url: url,
		dataType: 'JSON',
		method: 'GET'
	});

	dataReq.done(function(res){
		console.log("Success");
		console.log(res);
		showProductDetails(res.pDetails);
	});
}
getProductData();

var showProductDetails = (pDetails) => {
	alert("called")
	for (var i = 0 ; i < pDetails.length; i++) {
		$(".detailsHolder").loadTemplate($("#prodDetailsTmplt"), pDetails[i], {append:true});
	}
}
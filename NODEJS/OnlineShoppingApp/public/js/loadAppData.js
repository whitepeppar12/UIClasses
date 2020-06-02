function getProductData(sData) {
	var data = {};
	if (sData) {
		data = sData;
	}
	var url = "http://localhost:8081/product/details";
	var dataReq = $.ajax({
		url: url,
		dataType: 'JSON',
		method: 'GET',
		data: data
	});

	dataReq.done(function(res){
		console.log("Success");
		console.log(res);
		if (res.pDetails.length == 0) {
			$(".detailsHolder").html("There are no products matching ur search query")
		} else {
			showProductDetails(res.pDetails);
		}
	});
}
//getProductData();

var showProductDetails = (pDetails) => {
	$(".detailsHolder").html("");
	for (var i = 0 ; i < pDetails.length; i++) {
		$(".detailsHolder").loadTemplate($("#prodDetailsTmplt"), pDetails[i], {append:true});
	}
}

function validateUser() {
	var userDetails = {};
	userDetails.id = $("#uid").val();
	userDetails.pwd = $("#upwd").val();
	console.log(userDetails);
	var loginReq = $.ajax({
		url: 'http://localhost:8081/data/validation',
		dataType: 'JSON',
		method: 'POST',
		data: userDetails
	});
	loginReq.done(function(res){
		console.log("res");
		console.log(res);
		if (res.msg == 'Valid') {
			$(".loginBlock").hide();
			$(".productDetailsContainer").show();
			getProductData();
		} else {
			$(".invalidCrd").show(500);
		}
	})
}

function searchData() {
	var sData = {
		key: $("#userSearchKey").val()
	}

	getProductData(sData)
}	

function showPage(pagename) {
	switch (pagename) {
		case 'signup':
			$(".loginBlock").hide();
			$(".newSignupBlock").show();
			break;
		case 'login':
			$(".loginBlock").show();
			$(".newSignupBlock").hide();
			$(".userSignupsuccss").hide();
	}
}
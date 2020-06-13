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
		if(res.msg) {
			// notlogged in,,so show him the login page..
			showPage('login');
		} else {
			showPage('productDetails');
			if (res.pDetails.length == 0) {
				$(".detailsHolder").html("There are no products matching ur search query")
			} else {
				showProductDetails(res.pDetails);
			}
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
	alert("test")
	var userDetails = {};
	userDetails.id = $("#uid").val();
	userDetails.pwd = $("#upwd").val();
	console.log()
	if ($("#remPwd").is(":checked")){
		localStorage.setItem("userDetails", JSON.stringify(userDetails));
		console.log(localStorage.getItem("userDetails"))
	} else {
		localStorage.removeItem("userDetails")
	}

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
			$(".productDetailsContainer").hide();
			$(".userSignupsuccss").hide();
			break;
		case 'productDetails':
			$(".loginBlock").hide();
			$(".productDetailsContainer").show();
			break;
	}
}

getProductData();

function userLogout() {
	$.ajax({
		url: "/user/logout",
		method: 'GET',
		dataType: 'JSON',
		success: function() {
			showPage('login');
		}
	})
}


setTimeout(function(){
	userLogout();
}, 8000);

console.log("data we have");
console.log(localStorage.getItem("userDetails"));
$(document).ready(function(){
	if (localStorage.getItem("userDetails")) { // fill the boxes with data
		
		var data = JSON.parse(localStorage.getItem("userDetails"));
		$("#uid").val(data.id);
		$("#upwd").val(data.pwd);
	}
})

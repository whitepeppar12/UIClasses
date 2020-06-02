function readProductData() {
	var pData = {};
	pData.name = $("#pname").val();
	pData.price = $("#price").val();
	pData.manu = $("#manufacturer").val();
	pData.mainimageUrl = $("#imgurl").val();
	pData.discount = $("#discount").val();
	pData.sellerDetails = $("#sname").val();
	console.log(pData);

	var addDataReq = $.ajax({
		url: 'http://localhost:8081/add/data/product',
		data: pData,
		method: 'GET',
		dataType: 'JSON'
	});

	addDataReq.done(function(res){
		console.log("res");
		console.log(res);
	});
}
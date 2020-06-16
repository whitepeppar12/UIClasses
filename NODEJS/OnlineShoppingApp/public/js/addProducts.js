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

function uploadImage() {
	console.log($("input[name=prodImage]"));
	var uploadfile = $("input[name=prodImage]")[0].files[0];
    var formData = new FormData();    
    formData.append("prodImage", uploadfile);


    var uploadImageWebService = '/uploadProfilePicture'
    $.ajax({ 
        url: uploadImageWebService, 
        data: formData, 
        processData: false, 
        contentType: false, 
        type: 'POST', 
        dataType: 'JSON',
        success: function(data){ 
            console.log(data);
            $("#imgurl").val(data.imageUrl);

        }, error: function(err){
            console.log("err");
            console.log(err);
        }
    });

    
}

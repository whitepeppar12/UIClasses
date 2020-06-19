function readUserData() {
	var data = {};
	data.userid = $("#u_rid").val();
	data.pwd = $("#u_rpwd").val();
	data.mailid = $("#u_rmailid").val();
	data.phno = $("#u_rpno").val();
	console.log(data);

	var signupReq = $.ajax({
		url: 'http://localhost:8081/user/signup',
		data: data,
		method:'POST',
		dataType: 'JSON'
	});

	signupReq.done(function(res){
		console.log("response is");
		console.log(res);
		if (res.msg == "success") {
			$(".signupdetails").hide();
			$(".userSignupsuccss").show();
		}
	});
}
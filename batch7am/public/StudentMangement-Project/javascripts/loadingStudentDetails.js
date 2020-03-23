function loadStudentDetails(){
	var url = 'http://localhost:8080/get/studentDetails';
	$.ajax({
		url: url,
		method: 'GET',
		dataType: 'JSON',
		success: function(res){
			console.log(res);
			showStudentDetails(res.sdetails);
		},
		error: function(err){
			console.log("error")
		}
	})
}

function showStudentDetails(data) {
	for (var i = 0; i < data.length; i++) {
		$("#detailsContainer").loadTemplate( $('#individualDetailsTmplt'), data[i], {append: true})
	}
}
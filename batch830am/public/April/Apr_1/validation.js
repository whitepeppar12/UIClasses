function readUserInfo() {
	var userInfo = {};
	userInfo.name = document.querySelector("#uname").value;

	if (!userInfo.name) {
		document.querySelector(".unameError").style.display = 'block';
		return;
	} else {
		document.querySelector(".unameError").style.display = 'none';
	}

	userInfo.actId = document.querySelector("#uacnt").value;

	if (!userInfo.actId) {
		document.querySelector(".acterr").style.display = 'block';

	} else {
		document.querySelector(".acterr").style.display = 'none';
	}
	userInfo.pwd = document.querySelector("#upwd").value;
	var rpwd = document.querySelector("#rpwd").value;
	

	userInfo.gender = document.querySelector('input[name="gender"]:checked').value;
	userInfo.country = document.querySelector("#userCountry").value;

	console.log(userInfo);

}

function readData() {
	var uData = {};
	uData.name = document.querySelector("#uname").value;
	if (!uData.name) {
		document.querySelector(".unameError").style.display = 'block'
		return;
	} else {
		document.querySelector(".unameError").style.display = 'none'
	}

	uData.pwd = document.querySelector("#upwd").value;
	if (!uData.pwd) {
		document.querySelector(".upwdError").style.display = 'block'
		return;
	} else {
		document.querySelector(".upwdError").style.display = 'none'
	}

	uData.Rpwd = document.querySelector("#Repwd").value;
	if (!uData.Rpwd) {
		document.querySelector(".RepwdError").style.display = 'block'
		return;
	} else {
		document.querySelector(".RepwdError").style.display = 'none'
	}

	/*if (uData.pwd!=uData.Rpwd){
		document.querySelector(".pwdmatch").style.display = 'block'
		return;
	} else {
		document.querySelector(".pwdmatch").style.display = 'none'
	}*/

	uData.numbr = document.querySelector("#Unum"). value;
	if (!uData.numbr) {
		document.querySelector(".UnumError").style.display = 'block'
		return;
	} else {
		document.querySelector(".UnumError").style.display = 'none'
	}

	uData.Email = document.querySelector("#MailId").value;
	if (!uData.Email) {
		document.querySelector(".MailIdError").style.display = 'block'
		return;
	} else {
		document.querySelector(".MailIdError").style.display = 'none'
	}

	//----------pwd validation-------------

	uData.pwd = document.querySelector("#upwd").value;
	if (uData.pwd.length < 8) {
		document.querySelector("#pwdvalid").innerHTML = "**Password length must be 8 char";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("too-short");
	} else if (uData.pwd.search(/[0-9]/) == -1) {
		document.querySelector("#pwdvalid").innerHTML = "**Atleast 1 numeric value must enter";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("no_number");
	} else if (uData.pwd.search(/[a-z]/) == -1) {
		document.querySelector("#pwdvalid").innerHTML = "**Atleast 1 small letter must enter";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("no_letter");
	} else if (uData.pwd.search(/[A-Z]/) == -1) {
		document.querySelector("#pwdvalid").innerHTML = "**Atleast 1 upper letter must enter";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("no_Uletter");
	} else if (uData.pwd.search(/[!\@\#\$\%\^\&]/) == -1) {
		document.querySelector("#pwdvalid").innerHTML = "**Atleast 1 Special char must enter";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("no_Spclchar");
	} else if (uData.pwd!=uData.Rpwd) {
		document.querySelector("#pwdvalid").innerHTML = "**Password did not match";
		document.querySelector("#pwdvalid").style.color = "red";
		return ("pwd_notMatched");
	} 
		document.querySelector("#pwdvalid").innerHTML = "Successful";
		document.querySelector("#pwdvalid").style.color = "green";
		return ("ok");
} 

//----Pwd Visibility-----//

var state = false;
function toggle(){
	if (state) {
		document.querySelector(".password").setAttribute("type", "password");
		document.querySelector("#eye").style.color = '#ccc';
		state = false;
	} else {
		document.querySelector(".password").setAttribute("type", "text");
		document.querySelector("#eye").style.color = 'yellow';
		state = true;
	}
}



function validateUname(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 17) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	if ((event.charCode >= 97 && event.charCode <= 122 )  || (event.charCode >= 65 && event.charCode <= 90)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

/*function validatePwd(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 16) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	//64 = @, 42 = *, 95 = _, 35 = #, 97 to 122(small alphabets), 65 to 90(Capital letters), 48 to 57(numbers)
	if ((event.charCode >= 97 && event.charCode <= 122) ||
	 	(event.charCode >= 65 && event.charCode <= 90) ||
	  	(event.charCode >= 48 && event.charCode <= 57) || 
	  	(event.charCode == 64) || (event.charCode == 42) || 
	  	(event.charCode == 95) || (event.charCode == 35)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}

}*/

function validateUnum(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 10) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	if ((event.charCode >= 48 && event.charCode <= 57)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 50) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}
	// 64 = @, 46 = . 
	if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57) || 
		(event.charCode == 64) || (event.charCode == 46)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	} 

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}



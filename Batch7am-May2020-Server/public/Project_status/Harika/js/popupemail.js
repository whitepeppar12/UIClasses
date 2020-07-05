function readData() {
	var Data = {};

	Data.mail = document.querySelector("#eMailId").value;

	try {
		if (Data.mail == ''){
			//exception
			throw "email error";
		}
	} catch(error) {
		if (error = "email error"){
			msg = "email is mandatory field";
			displayDialog(msg)
		}
	}

	console.log(Data);
}


function closeDialog() {
	document.querySelector(".popupContainer").style.display = "none";
	document.querySelector(".maskBlock").style.display = 'none'
}

function displayDialog(msg) {
	document.querySelector(".popupContainer").style.display = 'block'
	document.querySelector(".maskBlock").style.display = 'block'
	document.querySelector(".DialogContainer").innerText = msg;
}


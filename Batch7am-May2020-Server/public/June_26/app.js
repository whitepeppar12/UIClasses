function registerDetails() {
	var data = {};
	data.name = document.querySelector("#uname").value;
	data.age = document.querySelector("#userAge").value;

	/*if (data.name == '') {
		document.querySelector("#nameErr").style.display = 'block';
	}
	var msg;
	if (data.age == '') {
		msg = "Age is mandry field";
		document.querySelector("#ageErr").innerHTML = msg;
	} else if (data.age < 21) {
			
		msg = "U dnt have enough age validation to join";
		document.querySelector("#ageErr").innerHTML = msg;
	}
	console.log(data);*/

	try {
		if (data.name == '') {
			// its an exception...
			throw "name error";
		} 
		if (data.age == '') {
			throw 'age empty error';
		} else if (data.age < 21) {
			throw 'age smaller error';
		}
	} catch(error) {
		if (error == 'name error') {
			document.querySelector("#nameErr").style.display = 'block';
		} else if (error == 'age empty error') {
			msg = "Age is mandry field";
			//document.querySelector("#ageErr").innerHTML = msg;
			displaydialog(msg)
		} else if (error == 'age smaller error') {
			msg = "U dnt have enough age validation to join";
			document.querySelector("#ageErr").innerHTML = msg;
		}
	}
}
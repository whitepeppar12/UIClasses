var readUserInput = function() {
	var sData = {};
	sData.name = document.querySelector("#sname").value;

	if (sData.name == '') {
		document.querySelector("#nameErr").style.display = 'block';
		return;
	}

	sData.age = document.querySelector("#sage").value;
	sData.gender = document.querySelector("input[name=gender]:checked").value;

	sData.marks = [];
	for (var i = 0 ; i < 5; i++) {
		var id = "#m" + (i+1);
		var m = document.querySelector(id).value;
		m = parseInt(m);
		sData.marks.push(m);
	}
	displayResult(sData);
}


function validateName(event) {
	console.log(event.charCode)
	if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) ){
		return true;
	} else {
		return false;
	}
}


function getTotalAndAvg(data) {

	data.total = 0;
	for (var i = 0 ; i < data.marks.length; i++) {
		data.total = data.marks[i] + data.total;
	}
	data.avg = data.total / data.marks.length;
	return data;
}

function getGrade(data) {
	data.grade = '';
	if (data.avg >= 40) {
		data.grade = "Passed";
	} else {
		data.grade = "You hve a surprise";
	}
	return data;
}

function displayResult(data) {
	data = getTotalAndAvg(data);
	data = getGrade(data);
	
	var ulTag = document.createElement("ul");
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Student Name is " + data.name;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerHTML = "Age is " + data.age;
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerHTML = "Total is " + data.total;
	ulTag.append(li3);

	var li4 = document.createElement("li");
	li4.innerHTML = "Avg is " + data.avg;
	ulTag.append(li4);
	
	var li5 = document.createElement("li");
	li5.innerHTML = "Grade is " + data.grade;
	ulTag.append(li5);

	console.log(ulTag)

	//document.getElementById("block").append(ulTag);

	// document.getElementByClassname("container");

	// document.getElementByTagname("div");

	document.querySelector("#container").append(ulTag)


}
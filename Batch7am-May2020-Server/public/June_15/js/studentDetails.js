/*var data = {
	name: "Prasad",
	age: 50,
	gender: 'Male',
	marks: [34, 56, 78, 10]
}*/
var data = {};
data.name = "Prasad";
data.age = 50;
data.gender = "Male";
data.marks = [34, 56, 78, 10];

function getTotalAndAvg() {
	data.total = 0;
	for (var i = 0 ; i < data.marks.length; i++) {
		data.total = data.marks[i] + data.total;
	}
	data.avg = data.total / data.marks.length;
}

function getGrade() {
	data.grade = '';
	if (data.avg >= 40) {
		data.grade = "Passed";
	} else {
		data.grade = "You hve a surprise";
	}
}

function displayResult() {
	getTotalAndAvg();
	getGrade();
	
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

displayResult();
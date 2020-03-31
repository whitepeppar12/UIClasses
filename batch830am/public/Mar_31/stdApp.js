function readData() {
	var sData = {};
	sData.name = document.querySelector("#sname").value;
	sData.age = document.querySelector("#sage").value;
	sData.class = document.querySelector("#sClass").value;
	sData.marks = [];
	for (var i = 1 ; i <= 5; i++) {
		var id = "#m" + i;
		var temp = document.querySelector(id).value;
		temp = parseInt(temp);
		sData.marks.push(temp);
	}
	sData.getTotalAndAvg = function() {
		this.total = 0;
		for (var i = 0 ; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total/this.marks.length;
		this.getGrade();
	}
	sData.getGrade = function() {
		this.grade = '';
		if (this.avg > 40 ) {
			this.grade = "You got passed";
		} else {
			this.grade = "You have a surprise";
		}
	}
	sData.displayProgressCard = function() {
		this.getTotalAndAvg();
		// code to display data to user on ui
		document.querySelector(".detailsBlock").style.display = 'block';

		var ulTag = document.createElement("ul");

		var li1 = document.createElement("li");
		li1.innerText = "Name : " + this.name;
		ulTag.append(li1);

		var li2 = document.createElement("li");
		li2.innerText = "Age : " + this.age;
		ulTag.append(li2);

		var li3 = document.createElement("li");
		li3.innerText = "Total : " + this.total;
		ulTag.append(li3);

		var li4 = document.createElement("li");
		li4.innerText = "Total : " + this.total;
		ulTag.append(li4);

		var li5 = document.createElement("li");
		li5.innerText = "Avg : " + this.avg;
		ulTag.append(li5);

		var li6 = document.createElement("li");
		li6.innerText = "Grade : " + this.grade;
		ulTag.append(li6);

		document.querySelector(".detailsBlock").append(ulTag);

	}
	sData.displayProgressCard();
	console.log(sData);
}

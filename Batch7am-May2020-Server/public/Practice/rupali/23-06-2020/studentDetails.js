function SchoolDetails(){
	this.schoolName = "ABC School";
	this.schoolCode = "Schl_098";
	this.schoolLoc = "Hyd";
}

function StudentDetails(data1){
    this.sname = data1.sname;
    this.sage = data1.sage;
    this.gender = data1.gender;
    this.marks = data1.marks;
    this.total = 0;
    this.avg = 0;
    
    this.getTotalAndAvg = function() {
		for (var i = 0; i < this.marks.length; i++) {
			this.total += this.marks[i];
		}
		this.avg = this.total / this.marks.length;
	};
    
    this.getGrade = function() {
		this.getTotalAndAvg();
		if (this.avg > 40) {
			this.grade = "Passed";
		} else {
			this.grade = "Failed";
		}
	};
    this.displayData = function(){
        this.getGrade();
        var ulTag = document.createElement("ul");
        for(var temp in this){
            console.log(temp);
            if(typeof(this[temp]) != 'function'){
                var liTag = document.createElement('li');
                liTag.innerHTML = temp + ':' + this[temp];
            }
            ulTag.append(liTag);
        }
        document.querySelector(".dContainer").append(ulTag);
    };
    

}

StudentDetails.prototype = new SchoolDetails();
var data1 = {"sname": "TEena", "sage": 21, gender: "male", marks: [34, 56, 78, 90]}
var sdata1 = new StudentDetails(data1);
sdata1.displayData();

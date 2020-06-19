function getGrade(){

    var data = {};
  
    data.sname = document.querySelector('#name').value;
    // document.querySelector('span#sName').append(data.sname);

    data.sage = document.querySelector('#age').value;
    data.sage = parseInt(data.sage);
    // document.querySelector('span#sAge').append(data.sage);

    data.gender = document.querySelector("input[name=gender]:checked").value;
    // document.querySelector('#sGender').append(data.gender);
  
    data.sclass = document.querySelector('#sClass').value;
    // document.querySelector('span#sClasss').append(data.sclass);

    data.marks = [];
    for(var i=0; i<5; i++)
    {
        var marksiD = "#sub"+(i+1);
        var marks = document.querySelector(marksiD).value
        marks =parseInt(marks);
        data.marks.push(marks);
    }

    displayResult(data);


}

function avgAndTotal(data){
    data.total = 0;
	for (var i = 0 ; i < data.marks.length; i++) {
		data.total = data.marks[i] + data.total;
	}
	data.percentage = data.total / data.marks.length;
	return data;
}

function sGrade(data){
    data.grade = "";
    if(data.percentage>70)
    {
        data.grade = "Distinction";
    } else if(data.percentage>60 && data.percentage<70)
    {
        data.grade = "First Class";
    }else if(data.percentage>50 && data.percentage<60)
    {
        data.grade = "Second Class";
    }else{
        data.grade = "Failed"
    }
    return data;
}

function displayResult(data) {
	data = avgAndTotal(data);
	data = sGrade(data);
	
	var ulTag = document.createElement("ul");
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Student Name is: " + data.sname;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerHTML = "Age is: " + data.sage;
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerHTML = "Total Marks: " + data.total;
	ulTag.append(li3);

	var li4 = document.createElement("li");
	li4.innerHTML = "Percentage is: " + data.percentage;
	ulTag.append(li4);
	
	var li5 = document.createElement("li");
	li5.innerHTML = "Grade is: " + data.grade;
	ulTag.append(li5);

	console.log(ulTag)

	document.querySelector(".container1").append(ulTag);


}


function numValidation(event){
    console.log(event.charCode);
    if ((event.charCode >= 48 && event.charCode <= 57))
    {
        return true;
    } else 
    {
        return false;
    }

}

function textValidation(event){
    console.log(event.charCode);
    if ((event.charCode >= 97 && event.charCode <=122) || (event.charCode >= 65 && event.charCode <= 90))
    {
        return true;
    } else 
    {
        return false;
    }

}
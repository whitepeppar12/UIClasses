var readUserInput= function(){
	var Data={};
	Data.name=document.querySelector("#sName").value;
	

	Data.age=document.querySelector("#sAge").value;
	Data.gender=document.querySelector("input[name=gender]:checked").value;
	
	Data.marks=[];
	for(var i=0;i<5; i++){
		var id="#m"+(i+1);
		var m=document.querySelector(id).value;
		m=parseInt(m);
		Data.marks.push(m);
	}
	console.log(Data);
	displayResult(Data);
}

function validateName(event){
	console.log(event.charCode)
	if((event.charCode>=97 && event.charCode<=122) || (event.charCode>=65 && event.charCode<=90)){
		return true;
	}else{
		return false;
	}
}
function validateAge(event){
	console.log(event.charCode);
	if((event.charCode>=48 && event.charCode<=57)){
		return true;
	}else{
		return false;
	}
}
function validateMarks(event){
	console.log(event.charCode);
	if((event.charCode>=48 && event.charCode<=57)){
		return true;
	}else{
		return false;
	}
}
function getTotalAndAvg(Data){
	Data.total=0;
	for(var i=0;i< Data.marks.length; i++){
		Data.total=Data.marks[i]+Data.total;
	}
	
	Data.avg=Data.total/Data.marks.length;
	return Data;

}
function getGrade(Data){
	Data.grade='';
	if(Data.avg>=40){
		Data.grade="passed";

	}else{
		Data.grade= "you have surprise";

	}
	return Data;
}
function displayResult(Data){
	Data=getTotalAndAvg(Data);
	Data=getGrade(Data);

	var ulTag=document.createElement("ul");


	var li1=document.createElement("li");
	li1.innerHTML="Student Name is: " +Data.name;
	ulTag.append(li1);

	var li2=document.createElement("li");
	li2.innerHTML="Student Age is: " +Data.age;
	ulTag.append(li2);

	var li6=document.createElement("li");
	li6.innerHTML="Gender: " + Data.gender;
	ulTag.append(li6);

	var li3=document.createElement("li");
	li3.innerHTML=" Total Marks is: " +Data.total;
	ulTag.append(li3);

	var li4=document.createElement("li");
	li4.innerHTML="Avg Marks: " +Data.avg;
	ulTag.append(li4);

	var li5=document.createElement("li");
	li5.innerHTML="Grade: " +Data.grade;
	ulTag.append(li5);

	console.log(ulTag)

	document.querySelector("#container").append(ulTag)
}


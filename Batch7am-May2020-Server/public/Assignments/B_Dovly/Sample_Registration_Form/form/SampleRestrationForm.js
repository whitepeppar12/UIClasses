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

var Student_Data={};
function Getdata() {
	Student_Data.name=document.querySelector("#Sname").value;

	Student_Data.age=document.querySelector("#SAge").value;
	

	Student_Data.Contry=document.querySelector("#SContry").value;
	
	Student_Data.State=document.querySelector("#SState").value;
	
	Student_Data.City=document.querySelector("#SCity").value;
	console.log(Student_Data);
	getResult(Student_Data);
}
function getResult(Student_Data){

	var ulTag=document.createElement("ul");


	var li1=document.createElement("li");
	li1.innerHTML="Student Name is: " +Student_Data.name;
	ulTag.append(li1);

	var li2=document.createElement("li");
	li2.innerHTML="Student Age is: " +Student_Data.age;
	ulTag.append(li2);


	var li3=document.createElement("li");
	li3.innerHTML="Contry is: " +Student_Data.Contry;
	ulTag.append(li3);

	var li4=document.createElement("li");
	li4.innerHTML="State is: " +Student_Data.State;
	ulTag.append(li4);

	var li5=document.createElement("li");
	li5.innerHTML="City is: " +Student_Data.City;
	ulTag.append(li5);

	console.log(ulTag);

	document.querySelector("#finalContainer").append(ulTag);
}
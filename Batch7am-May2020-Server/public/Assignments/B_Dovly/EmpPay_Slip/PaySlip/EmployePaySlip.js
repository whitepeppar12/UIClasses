function ReadEmpDetails(){
	var Edata={};
	Edata.name=document.querySelector("#Ename").value;
	Edata.EID=document.querySelector("#IDNO").value;
	Edata.DesName=document.querySelector("#DesName").value;
	Edata.Dept=document.querySelector("input[name=Dept]:checked").value;
	Edata.Salary=document.querySelector("#ESalary").value;
	

	console.log(Edata);
	
	displayPaySlip(Edata);

}
function validateName(event){
	console.log(event.charCode);
	if((event.charCode>=97 && event.charCode<=122)|| (event.charCode>=65 && event.charCode<95)){
		return true;
	}else{
		return false;
	}
}
function validateNum(event){
	console.log(event.charCode);
	if(event.charCode>=48 && event.charCode<=57){
		return true;
	}else{
		return false;
	}
}

function CaliculatePF(Edata){
	Edata.TotalSal=0;
	Edata.PF=(12/100)*Edata.Salary;
	console.log("PF is " +Edata.PF);
	Edata.HRA=(25/100)*Edata.Salary;
	console.log("HRA is " +Edata.HRA);
	
	Edata.PFHRA=Edata.PF+Edata.HRA;
	Edata.FinalSal=parseInt(Edata.PFHRA)+parseInt(Edata.Salary);
	console.log("FinalSal is : " +Edata.FinalSal);
	
	}


function Tax(Edata){
	Edata.tax=0;
	if(Edata.Salary>=50000){
		Edata.tax=(20/100)*Edata.Salary;
	}else if(Edata.Salary>=20000 && Edata.Salary<=50000){
		Edata.tax=(10/100)*Edata.Salary;
	}else{
		return Edata.tax;
	}
	console.log( "Tax is" +Edata.tax);
}

function displayPaySlip(Edata){
	
	CaliculatePF(Edata);
	Tax(Edata);
	 var divTag=document.createElement("div");
	 divTag.setAttribute("class", "FinalPay");


		
	var ulTag=document.createElement("ul");
	var h1Tag=document.createElement("h1");
	h1Tag.innerHTML="ABC Company";
	ulTag.append(h1Tag);


	var li1=document.createElement("li");
	li1.innerHTML="Employe Name :" +Edata.name;
	ulTag.append(li1);

	var li2=document.createElement("li");
	li2.innerHTML="EID: " +Edata.EID;
	ulTag.append(li2);

	var li6=document.createElement("li");
	li6.innerHTML="Designation is : " + Edata.DesName;
	ulTag.append(li6);

	var li3=document.createElement("li");
	li3.innerHTML=" Dept is: " +Edata.Dept;
	ulTag.append(li3);

	var li4=document.createElement("li");
	li4.innerHTML=" PF is: " +Edata.PF;
	ulTag.append(li4);

	var li5=document.createElement("li");
	li5.innerHTML="HRA is: " +Edata.HRA;
	ulTag.append(li5);

	var li5=document.createElement("li");
	li5.innerHTML="FinalSal is: " +Edata.FinalSal;
	ulTag.append(li5);

	var li5=document.createElement("li");
	li5.innerHTML="Tax is: " +Edata.tax;
	ulTag.append(li5);
	divTag.append(ulTag);

	
	

	document.querySelector("#FinalPaySlip").append(divTag);

}

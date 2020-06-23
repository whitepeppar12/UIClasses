function validateName(event) {
	//console.log(event.charCode)
	if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) ){
		return true;
	} else {
		return false;
	}
}
function validateAge(event) {
	//console.log(event.charCode)
	if (event.charCode >= 48 && event.charCode < 57){
		return true;
	} else {
		return false;
	}
}
function validateSalary(event) {
	//console.log(event.charCode)
	if (event.charCode >= 48 && event.charCode < 57){
		return true;
	} else {
		return false;
	}
}

var readEmpData = function(){
	var empData = {};
	empData.name = document.querySelector('#empName').value;			
	empData.age = parseInt(document.querySelector('#empAge').value);
	empData.gender = document.querySelector('input[name=gender]:checked').value;
    //empData.dept = document.querySelector('#empDept').selectedIndex;
	empData.dept = document.querySelector('#empDept').value;
	empData.basicSalary = parseInt(document.querySelector('#empBasicSal').value);
	displayEmployeeSalaryReport(empData);
}
function calculateSalary(saldata)
{
	saldata.totalSalery = 0;
	saldata.pf = 0;
	saldata.hra = 0;
	saldata.pf = (saldata.basicSalary * 12)/100;
	saldata.hra = (saldata.basicSalary * 25)/100;
	saldata.totalSalery = saldata.basicSalary + saldata.pf + saldata.hra;
	return saldata;
}
function calculateTax(taxdata)
{
	taxdata.tax = 0;
	taxdata.taxPer = 0;
	if(taxdata.totalSalery > 50000)
	{
		taxdata.tax = (taxdata.totalSalery * 15)/100;
		taxdata.taxPer = 15;
	}else if(taxdata.totalSalery > 30000)
	{
		taxdata.tax = (taxdata.totalSalery * 10)/100;
		taxdata.taxPer = 10;
	}else 
	{
		taxdata.tax = 0;
		taxdata.taxPer = 0;
	}
	return taxdata;
}
function displayEmployeeSalaryReport(data)
{
	
	data = calculateSalary(data);
	data = calculateTax(data)
	console.log(data);
	var ulTag = document.createElement("ul");
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Name : " + data.name;
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerHTML = "Age : " + data.age;
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerHTML = "Gender : " + data.gender;
	ulTag.append(li3);

	var li4 = document.createElement("li");
	li4.innerHTML = "Dept : " + data.dept;
	ulTag.append(li4);
	
	var li5 = document.createElement("li");
	li5.innerHTML = "Basic Salary : " + data.basicSalary;
	ulTag.append(li5);

	var li6 = document.createElement("li");
	li6.innerHTML = "PF Amount : " + data.pf;
	ulTag.append(li6);

	var li7 = document.createElement("li");
	li7.innerHTML = "HRA Amount : " + data.hra;
	ulTag.append(li7);

	var li8 = document.createElement("li");
	li8.innerHTML = "Total Salary Amount : " + data.totalSalery;
	ulTag.append(li8);

	var li9 = document.createElement("li");
	li9.innerHTML = "Total Tax Amount : " + data.tax + "Tax(%) : "+ data.taxPer;
	ulTag.append(li9);

	var li10 = document.createElement("li");
	li10.innerHTML = "Total Salary Amount After Tax Deduction : " + (data.totalSalery - data.tax);
	ulTag.append(li10);

	console.log(ulTag)

	//document.getElementById("block").append(ulTag);

	// document.getElementByClassname("container");

	// document.getElementByTagname("div");

	document.querySelector(".reportContainer").style.display = 'block';
	document.querySelector(".reportContainer").append(ulTag)
}
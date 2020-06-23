var empData = {
	name: "Pratik",
	age: 30,
	dept: 'Software',
	basicSalary: 50000,
	gender: 'Male'
};
function getTotalSalary() {
	empData.totalSalery = 0;
	empData.pf = 0;
	empData.hra = 0;
	empData.tax = 0;
	empData.taxPer = 0;
	empData.pf = (empData.basicSalary * 12)/100;
	empData.hra = (empData.basicSalary * 25)/100;
	empData.totalSalery = empData.basicSalary + empData.pf + empData.hra;				
	if(empData.totalSalery > 50000)
	{
		empData.tax = (empData.totalSalery * 15)/100;
		empData.taxPer = 15;
	}else if(empData.totalSalery > 30000)
	{
		empData.tax = (empData.totalSalery * 10)/100;
		empData.taxPer = 10;
	}else 
	{
		empData.tax = 0;
		empData.taxPer = 0;
	}
}
function displaySalaryResult()
{
	getTotalSalary();	
	
	var ulTag = document.createElement("ul");
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Employee Name Is " + empData.name;
	ulTag.append(li1);	
	
	var li2 = document.createElement("li");
	li2.innerHTML = "Employee Age Is " + empData.age;
	ulTag.append(li2);
	
	var li3 = document.createElement("li");
	li3.innerHTML = "Employee Gender Is " + empData.gender;
	ulTag.append(li3);

    var li4 = document.createElement("li")
    li4.innerHTML = "Employee Department Is " + empData.dept;
    ulTag.append(li4);

    var li5 = document.createElement("li");
	li5.innerHTML = "Employee Basic Salary Is " + empData.basicSalary;
	ulTag.append(li5);
	
	var li6 = document.createElement("li");
	li6.innerHTML = "Employee PF Amount Is " + empData.pf;
	ulTag.append(li6);
	
	var li7 = document.createElement("li");
	li7.innerHTML = "Employee HRA Amount Is" + empData.hra;
	ulTag.append(li7);
	
	var li8 = document.createElement("li");
	li8.innerHTML = "Employee Income Tax Amount Is" + empData.tax + " And Tax (%) Is " + empData.taxPer;
	ulTag.append(li8);
	
	var li9 = document.createElement("li");
	li9.innerHTML = "Total Salary Amount Is " + empData.totalSalery;
	ulTag.append(li9);
	
	console.log(ulTag);
	
	document.querySelector(".container").append(ulTag);
}
displaySalaryResult();
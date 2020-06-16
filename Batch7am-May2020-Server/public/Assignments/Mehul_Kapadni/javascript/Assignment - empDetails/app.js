empdetails = {
    empName: "Mehul Kapadni",
    empAge: 28,
    empGender: "Male",
    empDepartment: "Analytics",
    empBasicSalary: 50000,
    empPF: "",
    empHRA: "",
    empTotalSalary: 0,
    empPackage: "",
    empTax: ""
}

function calculateSalaryComponents() {
    empdetails.empPF = (12/100)*empdetails.empBasicSalary;
    //console.log(empdetails.empPF);
    empdetails.empHRA = (25/100)*(empdetails.empBasicSalary);
    //console.log(empdetails.empHRA);
    empdetails.empTotalSalary = empdetails.empPF+empdetails.empHRA+empdetails.empBasicSalary;
    //console.log(empdetails.empTotalSalary);
    empdetails.empPackage = empdetails.empTotalSalary*12;
    //console.log(empdetails.empPackage);
}

function calculateTax(){
    if(empdetails.empPackage>750000)
    {
        empdetails.empTax = (10/100)*empdetails.empPackage;
        //console.log(empdetails.empTax);
    }else if(empdetails.empPackage>500000 && empdetails.empPackage <750000)
    {
        empdetails.empTax = (5/100)*empdetails.empPackage
    }else
    {
        console.log("No Tax");
    }
}

function displayEmpDetails(){
    calculateSalaryComponents();
    calculateTax();

    var ulList = document.createElement("ul");

    var liempName = document.createElement("li");
    liempName.innerHTML = "Employee Name:"+" "+empdetails.empName;
    ulList.append(liempName);

    var liempAge = document.createElement("li");
    liempAge.innerHTML = "Employee Age:"+" "+empdetails.empAge;
    ulList.append(liempAge);

    var liempGender = document.createElement("li");
    liempGender.innerHTML = "Employee Gender:"+" "+empdetails.empGender;
    ulList.append(liempGender);

    var liempDepartment = document.createElement("li");
    liempDepartment.innerHTML = "Employee Department:"+" "+empdetails.empDepartment;
    ulList.append(liempDepartment);

    var liempbasicSalary = document.createElement("li");
    liempbasicSalary.innerHTML = "Employee HRA:"+" "+empdetails.empBasicSalary;
    ulList.append(liempbasicSalary);

    var liempPf = document.createElement("li");
    liempPf.innerHTML = "Employee PF:"+" "+empdetails.empPF;
    ulList.append(liempPf);

    var liempHra = document.createElement("li");
    liempHra.innerHTML = "Employee HRA:"+" "+empdetails.empHRA;
    ulList.append(liempHra);

    var liempTotalSalary = document.createElement("li");
    liempTotalSalary.innerHTML = "Employee Monthly Salary:"+" "+empdetails.empTotalSalary;
    ulList.append(liempTotalSalary);

    var liempAnnualSalary = document.createElement("li");
    liempAnnualSalary.innerHTML = "Employee Annual Package:"+" "+empdetails.empPackage;
    ulList.append(liempAnnualSalary);

    var liempTotalTax = document.createElement("li");
    liempTotalTax.innerHTML = "Employee Total Tax:"+" "+empdetails.empTax;
    ulList.append(liempTotalTax);

    document.querySelector(".container").append(ulList);
}

displayEmpDetails();

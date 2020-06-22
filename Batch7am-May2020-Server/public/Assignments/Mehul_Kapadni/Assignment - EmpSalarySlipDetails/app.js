function getSalarySlip(){

    var data = {};

    data.name = document.querySelector("#name").value;
    data.age = document.querySelector("#age").value;
    data.gender = document.querySelector("input[name=gender]:checked").value;
    var e = document.querySelector('#department');
    data.department = e.options[e.selectedIndex].value;

    data.basicSalary = document.querySelector("#basicSalary").value;
    console.log(data);
    displayData(data);
}

function calculateComponent(data){
    data.totalSalary = 0;
    data.pf = (12/100)*data.basicSalary;
    data.pf = parseInt(data.pf)
    data.hra =(25/100)*data.basicSalary;
    data.hra = parseInt(data.hra);
    data.totalSalary = data.basicSalary*12;

    return data;
}

function getTaxDetails(data){
    data.tax =0;
    if(data.basicSalary>50000)
    {
        data.tax = (10/100)*data.totalSalary;
    }else if(data.basicSalary>=30000 && data.basicSalary<=50000)
    {
        data.tax = (5/100)*data.totalSalary;
    }
    else{
        data.tax = 0;
    }
    return data;
}

function displayData(data){
    data = calculateComponent(data);
    data = getTaxDetails(data);

    // if (data.name != '' || data.age != ''|| data.gender != '' || data.department !=''||data.basicSalary !='') {
    //     document.querySelector("#salaryDetails").style.display = 'block';
    //     document.querySelector("#salaryDetailsH3").style.display = 'block';
	// 	return;
    // }
    
    var H3Tag = document.createElement("H3");
    H3Tag.setAttribute("class", "H3SalaryDetails");
    H3Tag.innerHTML = "Salary Slip of Employee";

    var container1 = document.createElement("div");
    container1.setAttribute("class", "container1");

    var uiTag = document.createElement("ui");

    var liName = document.createElement("li");
    liName.innerHTML = "<b>Employee Name:</b> "+data.name;
    uiTag.append(liName);

    var liAge = document.createElement("li");
    liAge.innerHTML = "<b>Employee Age:</b> "+data.age;
    uiTag.append(liAge);

    var liGender = document.createElement("li");
    liGender.innerHTML = "<b>Employee Gender: </b>"+data.gender;
    uiTag.append(liGender);

    var liDepart = document.createElement("li");
    liDepart.innerHTML = "<b>Employee Department: </b>"+data.department;
    uiTag.append(liDepart);
    
    var liPF = document.createElement("li");
    liPF.innerHTML = "<b>Employee PF:</b> "+data.pf;
    uiTag.append(liPF);

    var liHRA = document.createElement("li");
    liHRA.innerHTML = "<b>Employee HRA:</b> "+data.hra;
    uiTag.append(liHRA);

    var liTotal = document.createElement("li");
    liTotal.innerHTML = "<b>Employee Total Salary: </b>"+data.totalSalary;
    uiTag.append(liTotal);

    var liTax = document.createElement("li");
    liTax.innerHTML = "<b>Employee Tax:</b> "+data.tax;
    uiTag.append(liTax);

    document.querySelector('body').append(H3Tag);
    container1.append(uiTag);
    document.querySelector('body').append(container1);

}



function textValidation(event){
    console.log(event.charCode);
    if((event.charCode >=97 && event.charCode<=122)|| (event.charCode >= 65 && event.charCode <= 90))
    {
        return true;
    }else{
        return false;
    }

}

function numValidation(event){
    if(event.charCode >=48 && event.charCode<=57)
    {
        return true;
    }else{
        return false;
    }

}
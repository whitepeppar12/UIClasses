function companyInfo(){
    this.CompanyName = document.querySelector("#companyName").value;
    this.CompanyLocation = document.querySelector("#companyLocation").value;
    this.CompanyCode = document.querySelector("#companyCode").value;
}
function empDetails(){

    this.name = document.querySelector("#name").value;
    this.age = document.querySelector("#age").value;
    this.gender = document.querySelector("input[name=gender]:checked").value;
    this.department = document.querySelector("#department").value;
    this.basicSalary = document.querySelector("#basicSalary").value;


    this.calculateComponent = function(){
        this.pf = (12/100)*this.basicSalary;
        this.hra = (25/100)*this.basicSalary;
        this.totolSalary = this.pf+this.hra;
        this.totolSalary = this.totolSalary + parseInt(this.basicSalary);
    }
    this.getTxdetails = function(){
         this.calculateComponent();
        if(this.basicSalary>=50000){
            this.tax = (10/100)*this.basicSalary;
        }else if(this.basicSalary>3000 &&this.basicSalary<50000){
            this.tax = (5/100)*this.basicSalary;
        } else{
            this.tax = 0;
        }
    }
    this.displayData = function(){
         this.getTxdetails();
        var H3Tag = document.createElement("H3");
        H3Tag.innerHTML = "Salary Slip of Employee";
        var container1 = document.createElement("div");
        container1.setAttribute("class", "container1");
        var ulList = document.createElement("ul");
        for(var temp in this){
            if(typeof(this[temp])!="function")
            {
                var liList = document.createElement("li");
                liList.innerHTML = temp+ ":" +this[temp];   
                ulList.append(liList);
            }
        }    
        document.querySelector("body").append(container1);
        container1.append(ulList);
        console.log(this);
    } 
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


function calculateData() {
    empDetails.prototype = new companyInfo();

    var sData  = new empDetails();
  
    sData.displayData();
}
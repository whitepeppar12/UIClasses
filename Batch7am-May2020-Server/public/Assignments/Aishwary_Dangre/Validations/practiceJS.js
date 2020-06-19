function gettingValues() {
    var name = document.querySelector("#rname").value;
    var marks = document.querySelector("#rmarks").value;
    var age = document.querySelector("#rage").value;
    var addr = document.querySelector("#raddr").value;

    var details={};

    details.Name = name;
    details.Marks = marks;
    details.Age = age;
    details.Addr = addr;

    console.log("---------------------------");
    console.log("Details of Student");
    console.log("---------------------------");
    console.log("Name  : " + details.Name);
    console.log("Marks : " + details.Marks);
    console.log("Age   : " + details.Age);
    console.log("Addr  : " + details.Addr);
}

function onSubmit() {
    gettingValues();
}

function validateNumbers(event){
    if(event.charCode >=48 && event.charCode <=57){
        return true;
    }
    else{
        return false;
    }

}


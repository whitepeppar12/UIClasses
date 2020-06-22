function getDetails(){
var data = {};

data.name = document.querySelector("#sName").value;
data.age = document.querySelector("#sAge").value;
data.country = document.querySelector("#countySel").value;
data.state = document.querySelector("#stateSel").value;
data.city = document.getElementById("citySel").value;


console.log(data);
displayData(data);
}


function displayData(data){
    
var container1 = document.createElement("div");
container1.setAttribute("class","displayData");

var h3text = document.createElement("h3")
h3text.innerHTML = "registered Student Details";

var ulList = document.createElement("ul");

var liName = document.createElement("li");
liName.innerHTML = "<b>Student Name: </b>" +data.name;
ulList.append(liName);

var liAge = document.createElement("li");
liAge.innerHTML = "<b>Student Age: </b>" +data.age;
ulList.append(liAge);

var liCountry = document.createElement("li");
liCountry.innerHTML = "<b>Student Country: </b>" +data.country;
ulList.append(liCountry);

var liState = document.createElement("li");
liState.innerHTML = "<b>Student State: </b>" +data.state;
ulList.append(liState);

var liCity = document.createElement("li");
liCity.innerHTML = "<b>Student City: </b>" +data.city;
ulList.append(liCity);

document.querySelector("body").append(h3text);
container1.append(ulList);
document.querySelector("body").append(container1);

}


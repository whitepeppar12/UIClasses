var username="";

var data = [
    "Thank you using our site",
    "Complete Your Task List",
    "Solve the Current issue on Prod",
    "Stay Safe, Stay Home",
    "Complete your registration details"
];

function getValue(){
    username = document.querySelector("#username").value;
}

function createContainer(){
    var uDiv = document.createElement("div");
    uDiv.setAttribute("class","createContainer");
    uDiv.setAttribute("id", "createContainer");
    document.querySelector("body").append(uDiv);

}

function showData(){
    var maxIndx = 5;
    var randomNum = Math.random()*maxIndx;
    randomNum = Math.floor(randomNum);
    console.log(randomNum);
    var msg = "Hello" +" " +username+ " "+data[randomNum];
    try{
        document.querySelector("#createContainer").innerHTML = msg;
    }catch(error){
        alert("First Create Container ");
    }
    
}
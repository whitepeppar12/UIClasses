var userName = "";

var tasks = [
    "Solve pending assignments",
	"Create Project structure",
	"Finish all assigned pending taks",
	"Import all resources",
	"Finish the styling jobs"
];

function readUserName(){
   userName = document.querySelector("#uname").value;
}

function createContainer(){
    var divContainer = document.createElement("div");
    divContainer.setAttribute("id", "taskContainer" );
    divContainer.setAttribute("class", "Tcontainer");
    document.querySelector("body").append(divContainer);

}
function showTask(){
    var maxoptions = 5;
    var randomIndex = Math.random()*maxoptions;
    randomIndex = Math.floor(randomIndex); 
    var msg = "All the pending clas to be finishhed";
    msg = tasks[randomIndex];
    console.log(randomIndex);
    try{
        document.querySelector("#taskContainer").innerHTML = "<b> mr." + userName+ " your task is : " + msg + "</b>";

    }catch(err){
        alert ("you missed to  create container");
    }finally{
        document.querySelector("#thaxBlock").innerText = "Thankyou for using this web page";
    }
}
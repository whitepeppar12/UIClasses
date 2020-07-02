var userName = "";

var tasks = [
	"Solve pending assignments",
	"Create Project structure",
	"Finish all assigned pending taks",
	"Import all resources",
	"Finish the styling jobs"
];

function readUserName() {
	userName = document.querySelector("#uname").value;
}

function createContainer() {
	var divContainer = document.createElement("div");
	divContainer.setAttribute("id", "taksContainer");
	divContainer.setAttribute("class", "Tcontainer");

	document.querySelector("body").append(divContainer);
}

function showTask() {
	var maxOptions = 5;
	var randomIndex = Math.random() * maxOptions;
	randomIndex = Math.floor(randomIndex);
	var msg = tasks[randomIndex];
	try {
		document.querySelector("#taksContainer").innerHTML = "<b> Mr. " + userName + " your tasks is : " + msg + "</b>";
	} catch(err) {
		alert("you missed to create a container")
	} finally {

		// showing wlcm block;
		document.querySelector("#thxBlock").innerText = "Thanks for using our webpage";
		console.log("done")
	}
} 
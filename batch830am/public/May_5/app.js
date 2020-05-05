var showmsg = () => {
	var msg = "Hello every one...";
	document.querySelector("#container").innerHTML  = msg;
}

$(document).ready(function(){
	showmsg();
})

function showSecondMsg () {
	var msg = "Good bye for today";
	document.querySelector("#container2").innerHTML = msg;
}
 var socket;

function startCommunication() {
	socket = io('http://localhost:8080');
	socket.on("UserMSg", function(msg){
		showMsg(msg, "receiver")
	});
}

function readUserMsg() {
	var msg = $("#umsg").val();
	$("#umsg").val('');
	socket.emit("userMsgSend", msg);
	showMsg(msg, 'sender');
}

var showMsg = function(msg, type) {
	var className = "msg";
	var divTag = $("<div></div>");
	if (type == 'receiver') {
		className += ' alignRight';
	} else {
		className += ' alignLeft';
	}
	divTag.addClass(className)
	divTag.html(msg);
	$(".msgContent").append(divTag)
}


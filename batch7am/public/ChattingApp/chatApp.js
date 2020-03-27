function readUserMsg() {
	var msg = $("#umsg").val();
	 $("#umsg").val('');
	showMsg(msg, 'sender')
}

var showMsg = function(msg, type) {
	var divTag = $("<div></div>");
	divTag.addClass("msg")
	divTag.html(msg);
	$(".msgContent").append(divTag)
}
function getLatestDate() {
	var cDate = new Date();
	var date = cDate.getMonth() + '/' + cDate.getDate() + '/' + cDate.getFullYear();

	var time = cDate.getHours() + ':' + cDate.getMinutes() + ':' + cDate.getSeconds();

	var finalFormat = date + ' ' + time;
	postMessage(finalFormat);
}

setInterval(function(){
	getLatestDate();
}, 1000);


VAR DATA = 89;
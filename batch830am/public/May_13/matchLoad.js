function loadMatchDetails() {
	$(".loadingBlock").show();
	var match1Url = "http://localhost:8081/get/matchDetails/match1";

	var match2Url = "http://localhost:8081/get/matchDetails/match2";

	var match1promise = $.ajax({
		url: match1Url,
		method: 'GET',
		dataType: 'JSON'
	});

	var match2promise = $.ajax({
		url: match2Url,
		method: 'GET',
		dataType: 'JSON'
	});

	$.when(match1promise, match2promise).then(function(res1, res2){
		console.log(res1);
		console.log(res2);
		$(".loadingBlock").hide();
		loadMatchUI('match1', res1[0]);
		loadMatchUI('match2', res2[0]);
	})
	

};

function loadMatchUI(type, data) {
	var id = "#" + type + 'Block';
	$(id).loadTemplate( $('#matchTmplt'), data);
}
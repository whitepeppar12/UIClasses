var mathutil = (function(){

	var count = 1;

	function addValues(a, b) {
		count++;
		var res = 0;
		res = a + b;
		return res;
	}
	function mulValues(a, b) {
		count++;
		var res = 0;
		res = a * b;
		return res;
	}



	function divValues(a, b) {
		count++;
		var res = 0;
		res = a / b;
		return res;
	}
	return {
		addingValues: function(a, b) {
			var r = addValues(a,b);
			return r;
		},
		subValues: function(a, b) {
			count++;
			var res = 0;
			res = a - b;
			return res;
		}
	}

})();

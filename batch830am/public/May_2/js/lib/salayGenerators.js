var salDetails = (function(){

		function getPf(bsal) {
			var pf = (bsal * 12) / 100;
			return pf;
		}

		function getHra(bsal) {
			var hra = (bsal * 12) / 100;
			return hra;
		}

		function getTotalSal(bsal) {
			var pf = getPf(bsal);
			var hra = getHra(bsal);
			var totalSal = bsal + hra + pf;
			return totalSal;
		}

		function getTotalTax(bsal, gender) {
			var totalSal = getTotalSal(bsal);
			var taxpercent = 0;
			if (gender == 'male') {
				if (totalSal >= 50000) {
					taxpercent = 10;
				}
			} else { // for female
				if (totalSal >= 50000) {
					taxpercent = 5;
				}
			}
			var taxValue = (totalSal * taxpercent) / 100;
			console.log(taxValue)
			return taxValue;
		}
	return {
		getTotalEmpSal: function(bsal, gender) {
			var tax = getTotalTax(bsal, gender);
			return tax;
		},
		getPf: function(bsal) {
			var pf = getPf(bsal);
			return pf;
		}
	}

})();
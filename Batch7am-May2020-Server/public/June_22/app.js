var schoolDetails = {
	schoolName: 'ABC public School',
	schoolLoc: 'Pune',
	rating: '5/5'
};

function getRegDetails() {
	var sDetails = Object.create(schoolDetails);
	sDetails.sname = document.querySelector("#sname").value;
	sDetails.age = document.querySelector("#sAge").value;
	sDetails.country = document.querySelector("#scountry").value;
	sDetails.class = document.querySelector("#sclass").value;
	sDetails.showStudentDetails = function() {
		console.log(sDetails.schoolName)
		document.querySelector("#displayBlock").innerHTML = "";

		var ul = document.createElement("ul");
		for (var temp in sDetails) {
			if (typeof(sDetails[temp]) != 'function') {
				var liTag = document.createElement("li");
				liTag.innerHTML = temp + ' : ' + sDetails[temp];
				ul.append(liTag);
			}
		}
		document.querySelector("#displayBlock").append(ul);
	}
	sDetails.showStudentDetails();
}
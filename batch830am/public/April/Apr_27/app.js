var schoolDetails = {
	schoolName: "ABC School",
	schoolLoc:"Secrbad",
	shoolId: 'SCHl_23908',
	displaySchoolDetails: function() {
		console.log("School NAme " + this.schoolName);
		console.log("School Loc " + this.schoolLoc);
		console.log("School Id " + this.shoolId);
	}
}

function getRegistration() {
	var sDetails = Object.create(schoolDetails);
	
	sDetails.name = document.querySelector("#sname").value;
	sDetails.location = document.querySelector("#sLoc").value;
	sDetails.class = document.querySelector("#joinClass").value;
	sDetails.country = document.querySelector("#scountry").value;
	console.log(sDetails)
	sDetails.displaySchoolDetails();
}
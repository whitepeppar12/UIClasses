function generatePaySlip() {
	var empData = {};
	empData.name = document.querySelector("#ename").value;
	empData.dep = document.querySelector("#edep").value;
	empData.bsal = document.querySelector("#bsal").value;
	empData.bsal = parseInt(empData.bsal)

	empData.gender = document.querySelector("input[name=gender]:checked").value;


	empData.taxToPay = salDetails.getTotalEmpSal(empData.bsal, empData.gender);
	empData.totalSal = empData.bsal - empData.taxToPay;
	empData.pf =salDetails.getPf(empData.bsal)
	console.log(empData);

	showPayslipDetails(empData);
}

function getPf() {
	console.log("hello");
}

function showPayslipDetails(data) {
	//...
	//...
}
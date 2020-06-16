details = {
    name: "Mehul kapadni",
    age: 28,
    gender: "male",
    marks: [78,84,69,79],
    total: 0,
    avg: 0,
    grade: ""
}

function calculateTotalAndAvg() {
    
    for(var i=0;i<details.marks[i];i++)
    {
        details.total +=details.marks[i];
    }
    details.avg =details.total/details.marks.length;
 }

function studentGrade(){
    if(details.avg>60){
        details.grade = "Pass";
        //console.log("You have Passed the Exam");
    }
    else{
        details.grade = "Fail";
        //console.log("Failed, Try Next Time Again");
    }
}

function studentDetails(){
    calculateTotalAndAvg();
    studentGrade();
  
    var ullist = document.createElement("ul");
   
    var liName = document.createElement("li");
    liName.innerHTML = "Student Name:"+" "+details.name;
    ullist.append(liName);

    var liAge = document.createElement("li");
    liAge.innerHTML = "Student Age:"+" "+details.age;
    ullist.append(liAge);

    var liGender = document.createElement("li");
    liGender.innerHTML = "Student Gender:"+" "+details.gender;
    ullist.append(liGender);

    var liTotal = document.createElement("li");
    liTotal.innerHTML = "Student Total Marks:"+" "+details.total;
    ullist.append(liTotal);

    var liAvg = document.createElement("li");
    liAvg.innerHTML = "Student Total Marks:"+" "+details.avg;
    ullist.append(liAvg);

    var liGrade = document.createElement("li");
    liGrade.innerHTML = "Student Total Grade:"+" "+details.grade;
    ullist.append(liGrade);

    document.getElementById("container").append(ullist);

}

studentDetails();






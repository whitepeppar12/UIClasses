var sDetails = {};
function getRegDetails(){
    
    sDetails.sname = document.querySelector("#sName").value;
    sDetails.sage = document.querySelector("#sAge").value;
    sDetails.country = document.querySelector("#sCountry").value;
    sDetails.class = document.querySelector("#sClass").value;
    
    console.log(sDetails);
    showStudentDetails();
}

function showStudentDetails(){
    var ulList = document.createElement("ul");
    for(var temp in sDetails){
        var liTag = document.createElement("li");
        liTag.innerHTML = temp + ":" + sDetails[temp];
        ulList.append(liTag);
    }
    document.querySelector("#displayBlock").append(ulList);
}
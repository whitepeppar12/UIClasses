var schoolInfo = {
    schoolName: "SNJB",
    schoolLocation: "Chandwad",
    schoolStatus: "Standard"
}

function getDetails(){
    var data = Object.create(schoolInfo);
    data.Name= document.querySelector("#sName").value;
    data.Age =document.querySelector("#sAge").value;
    data.Country = document.querySelector("#country").value;
    data.Class = document.querySelector("#sclass").value;
    data.displayData = function(){
        var ulList = document.createElement("ul");
        for(var temp in data){
            if(typeof(data[temp])!="function"){
                var liList  = document.createElement("li");
                liList.innerHTML  = temp+ ":" +data[temp];
                ulList.append(liList);
            }
            
        }
        document.querySelector(".container2").append(ulList);
    }
    console.log(data);
    data.displayData();

}
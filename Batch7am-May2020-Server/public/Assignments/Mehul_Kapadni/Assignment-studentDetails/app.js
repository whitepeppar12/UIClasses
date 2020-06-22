// var deleteRow =document.getElementsByClassName("delete-item");

// loadEventListener();

// function loadEventListener(){
//     deleteRow.addEventListener('click' , removeTask);
// }

function getDetails(){
    var data = {};

    data.name =document.querySelector("#sName").value;
    data.gender = document.querySelector("input[name=gender]:checked").value;
    data.age =document.querySelector("#sAge").value;
    data.country = document.querySelector("#countySel").value

    console.log(data);
    displayData(data);
    
    
}

function displayData(data){

    var cBody = document.createElement("tbody");
    var row = document.createElement("tr");
    
    var sNO = document.createElement("td");
    row.append(sNO);

    var sName = document.createElement("td");
    sName.innerHTML = data.name;
    row.append(sName);

    var sGender = document.createElement("td");
    sGender.innerHTML = data.gender;
    row.append(sGender);

    var sAge = document.createElement("td");
    sAge.innerHTML = data.age
    row.append(sAge);

    var liCountry = document.createElement("td");
    liCountry.innerHTML = data.country;
    row.append(liCountry);

    var sDelete = document.createElement("td");
    var sbtn = document.createElement("button");
    var bText = document.createTextNode('delete');         
    sbtn.setAttribute("class", "delete-item");
    
    sbtn.appendChild(bText);
    sDelete.append(sbtn);    
    row.append(sDelete);
    cBody.append(row);

    document.querySelector("table").append(cBody);
    //document.querySelector(".delete-item").onclick = removeData(this);

}

// function removeData(x){
//     document.getElementsByClassName("myList").deleteRow(x.parentElement.parentElement.rowIndex);
// }

$(document).ready(function(){

    $(".css-serial").on('click','.delete-item',function(){
          $(this).closest('tr').remove();
        });
   
   });
  


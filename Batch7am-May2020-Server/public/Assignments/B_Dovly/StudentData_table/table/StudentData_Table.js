function validateName(event){
    console.log(event.charCode)
    if((event.charCode>=97 && event.charCode<=122) || (event.charCode>=65 && event.charCode<=90)){
        return true;
    }else{
        return false;
    }
}
function validateAge(event){
    console.log(event.charCode);
    if((event.charCode>=48 && event.charCode<=57)){
        return true;
    }else{
        return false;
    }
}
var Student_Data={};
function GetStudent_details(){
    Student_Data.sname=document.querySelector("#Sname").value;
    Student_Data.sage=document.querySelector("#Sage").value;
    Student_Data.gender=document.querySelector("input[name=gender]:checked").value;
    Student_Data.Country=document.querySelector("#Scountry").value;
    console.log(Student_Data);
    Table_Result(Student_Data);
}
function Table_Result(Student_Data){

    


    var table=document.createElement("table");
    table.setAttribute("id", "myTable");
    

    var tr1=document.createElement("tr");


    var th1=document.createElement("th");
    th1.innerHTML=" Name ";
    tr1.append(th1);

    var th2=document.createElement("th");
    th2.innerHTML=" Age ";
    tr1.append(th2);

    var th3=document.createElement("th");
    th3.innerHTML=" Gender ";
    tr1.append(th3);

    var th4=document.createElement("th");
    th4.innerHTML=" Country";
    tr1.append(th4);

    var th5=document.createElement("th");
    th5.innerHTML=" Opearartion";
    tr1.append(th5);

    var tr2=document.createElement("tr");
    tr2.setAttribute("id", " Item");
    

    var td1=document.createElement("td");
    td1.innerHTML=Student_Data.sname;;
    tr2.append(td1);

    var td2=document.createElement("td");
    td2.innerHTML=Student_Data.sage;
    tr2.append(td2);

    var td3=document.createElement("td");
    td3.innerHTML=Student_Data.gender;
    tr2.append(td3);

    var td4=document.createElement("td");
    td4.innerHTML=Student_Data.Country;
    tr2.append(td4);

    var td5=document.createElement("td");
    var button=document.createElement("button");
    button.innerHTML= "Delete" ;
    button.setAttribute("id", "MyRow");
    
    button.setAttribute("onclick", "deleteRow(this)");

    td5.append(button);
    tr2.append(td5);

    table.appendChild(tr1);
    table.appendChild(tr2);

    
   

document.querySelector("#Table_Container").append(table);


}
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}


    
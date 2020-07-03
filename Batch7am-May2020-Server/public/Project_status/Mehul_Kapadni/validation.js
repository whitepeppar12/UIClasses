function textValidation(event){
    console.log(event.charCode);
    if((event.charCode >=97 && event.charCode<=122)|| (event.charCode >= 65 && event.charCode <= 90))
    {
        return true;
    }else{
        return false;
    }

}



 function userNameValidation(event){
    console.log(event.charCode);
    if((event.charCode >=97 && event.charCode<=122)|| (event.charCode >= 65 && event.charCode <= 90)||(event.charCode >=48 && event.charCode<=57))
    {
        return true;
    }else{
        return false;
    }
 }

 function emailValidation(event){
    console.log(event.charCode);
    if((event.charCode >=97 && event.charCode<=122)|| (event.charCode >= 65 && event.charCode <= 90)||(event.charCode >=48 && event.charCode<=57)||(event.charCode === 46) || (event.charCode == 64))
    {
        return true;
    }else{
        return false;
    }
 }
 
// function textValidation(event){
//     console.log(event.charCode);
//     if((event.charCode >=97 && event.charCode<=122)|| (event.charCode >= 65 && event.charCode <= 90)||(event.charCode >= 32 && event.charCode <= 95))
//     {
//         return true;
//     }else{
//         return false;
//     }

// }
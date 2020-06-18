function getGrade(){
    var grade;

    var sname = document.querySelector('#name').value;
    document.querySelector('span#sName').append(sname);

    var sage = document.querySelector('#age').value;
    sage = parseInt(sage);
    document.querySelector('span#sAge').append(sage);

    var sclass = document.querySelector('#sClass').value;
    document.querySelector('span#sClasss').append(sclass);

    var m1 = document.querySelector('#sub1').value
    m1 =parseInt(m1);
    var m2 = document.querySelector('#sub2').value
    m2 =parseInt(m2);
    var m3 = document.querySelector('#sub3').value
    m3 =parseInt(m3);
    var m4 = document.querySelector('#sub4').value
    m4 =parseInt(m4);
    var m5 = document.querySelector('#sub5').value
    m5 =parseInt(m5);

    var total = m1+m2+m3+m4+m5;
    document.querySelector('#tMarks').append(total);

    var percentage = (total/500)*100;
    document.querySelector('#percen').append(percentage);

    if(percentage>70)
    {
        grade = "Distinction";
    } else if(percentage>60 && percentage<70)
    {
        grade = "First Class";
    }else if(percentage>50 && percentage<60)
    {
        grade = "Second Class";
    }else{
        grade = "Failed"
    }

    document.querySelector('#sGrade').append(grade);
}

function numValidation(event){
    console.log(event.charCode);
    if ((event.charCode >= 48 && event.charCode <= 57))
    {
        return true;
    } else 
    {
        return false;
    }

}

function textValidation(event){
    console.log(event.charCode);
    if ((event.charCode >= 97 && event.charCode <=122) || (event.charCode >= 65 && event.charCode <= 90))
    {
        return true;
    } else 
    {
        return false;
    }

}
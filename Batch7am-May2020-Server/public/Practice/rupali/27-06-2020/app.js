var counter = 0;
function dojob(type) {
    counter++;
    var fval = document.querySelector("#fval").value;
    var sval = document.querySelector("#sval").value;
    fval = parseInt(fval)
    sval = parseInt(sval)
    var result;
    switch(type) {
        case 'add':
            result = mathUtil.addValues(fval, sval);
            break;
        case 'sub':
            result = mathUtil.subValues(fval, sval);
            break;
        case 'div':
            result = doDivision(fval, sval);
            break;
        case 'mul':
            result = mathUtil.doMultiplication(fval, sval);
            break;
    }
    var msg = "The operation " + type + ' is : ' + result;
    msg += "   No. of times user used options is " + counter;
    document.querySelector("#rblock").innerText = msg;
} 
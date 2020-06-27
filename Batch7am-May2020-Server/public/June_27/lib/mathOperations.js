
(function(){
    var counter = 0;

    function doAddition(firstValue, secondValue) {
        counter++;
        var result = 0;
        result = firstValue + secondValue;
        return result;
    }

    function doSubstraction(firstValue, secondValue) {
        counter++;
        var result = 0; 
        result = firstValue - secondValue;
        return result;
    }

    function doMultiplication(firstValue, secondValue) {
        counter++;
        var result = 0; 
        result = firstValue * secondValue;
        return result;
    }

    function doDivision(firstValue, secondValue) {
        counter++;
        var result = 0; 
        result = firstValue / secondValue;
        return result;
    }
})();

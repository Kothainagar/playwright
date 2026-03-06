var num = 4;

console.log(checkNumber(num));

function checkNumber(num) {

    if (num > 0) {
        return "The number is positive and the value is " + num;
    } 
    else if (num < 0) {
        return "The number is negative and the value is " + num;
    } 
    else {
        return "The number is zero and the value is " + num;
    }

}
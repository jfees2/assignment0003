/*eslint-env browser*/

//STEP 1
/*
function halfNumber(x) {
    var num = x / 2;
    return "Half of " + x + " is " + num;
}

window.console.log(halfNumber(10));
*/

//STEP 2
/*
function squareNumber(x) {
    var num = (x * x);
    return "The result of squaring the number " + x + " is " + base;
}

window.console.log(squareNumber(7));
*/
//STEP 3
/*
function percentOf(x, y) {
    var percent = (x / y) * 100;
    console.log(x + " is " + percent + "% of " + y);
}

window.console.log(percentOf(42 , 50));
*/
//STEP 4
/*
function findModulus(x, y) {
    var mod = x % y;
    console.log(mod + " is the " + "modulus of " + x + " and " + y);
 
}

window.console.log(findModulus(30, 80));
*/

//STEP 5
var i;
var numbers = [];
var numList;

for (i = 0; i < 7; i++) {
    numbers.push(window.prompt("Please enter 7 numbers: " + " "));
}

numList = numbers.join(", ");
window.document.write(numList + "</br>");

function numSum() {
    var sum = 0;
    for (i = 0; i < 7; i++) {
        sum += i;
    }
    return sum;
}

var display = numSum(numbers);
window.document.write("Sum of numbers: " + display);





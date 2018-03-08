/*eslint-env browser*/

var num1 = parseInt(window.prompt("Please enter your first number number: "), 10);
var num2 = parseInt(window.prompt("Please enter your second number: "), 10);
var opperation = window.prompt("Do you want to add, substract, multiply, divide ");
var result; 

var answer = function calculate(x, y, z) {
    
    switch (opperation) {
        case "add":
            z = (x + y);
            break;
        case "subtract":
            z = (x - y);
            break;
        case "multiply":
            z = (x * y);
            break;
        case "divide":
            if (num2 === 0) {
                result = "Can not divide a number by 0!";
        }
            else {
                 z = (x / y);
            }
            break;
        default:
            z = "Invalid Input!";
    }
    return z;
};

var display = answer(num1, num2);
window.document.write(num1 + " " + opperation + " " + num2 + " = " + display);

let x, y = 0;
let operator = "";

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

const operate = function(x, y, operator){
    switch(operator){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return "Invalid operator";
    }
}
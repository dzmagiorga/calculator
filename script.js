
// make functions: add, subtract, multiply, divide
// we need three variables, 2 numbers and 1 operator
// make a function named operate which takes therese 3 vars and applies one of the four functions

const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y){
    return x - y;
}

const multiply = function(x, y){
    return x * y;
}

const divide = function(x, y){
    return x / y;
}

let x, y, operator;

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
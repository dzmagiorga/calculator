let display = document.querySelector("#display");
let buttons = document.querySelector("#buttons");

let x, y, operator;
x = y = operator = "";
display.textContent = "";

const add = (x, y) => Number(x) + Number(y);

const subtract = (x, y) => Number(x) - Number(y);

const multiply = (x, y) => Number(x) * Number(y);

const divide = (x, y) => {
    if (y === "0") return "Don't do that!"
    else return Number(x) / Number(y);
}

const operate = function(x, y, operator){
    switch(operator){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
        default:
            return "Invalid operator";
    }
}

const displayFormula = function(event) {
    const isButton = event.target.classList.contains("Button");
    if (isButton){
        const buttonValue = event.target.textContent;
        const isNumber = buttonValue.match(/[0-9]/g);
        const isOperator = buttonValue.match(/[\+\-x÷]/g);
        const removedOperator = display.textContent.replaceAll(/[\+\-x÷]/g, "");
        const isXEmpty = (x === "");
        const isYEmpty = (y === "");


        if (isNumber){
            if(operator === ""){
                x += buttonValue;
                display.textContent += buttonValue;
            } 
            else {
                y += buttonValue;
                display.textContent += buttonValue;
            }
        }
        if (isOperator && !isXEmpty && isYEmpty ){
            if (operator != ""){
                display.textContent = removedOperator;
                operator = buttonValue;
                display.textContent += ` ${buttonValue} `;
            } else {
             operator = buttonValue;
             display.textContent += ` ${buttonValue} `;
            }
         }
         if (isOperator && !isXEmpty && !isYEmpty){
             x = display.textContent = operate(x, y, operator);
             y = "";
             operator = buttonValue;
             display.textContent += ` ${buttonValue} `;
         }
    }
};

const calculate = function(event) {
    const isButton = event.target.classList.contains("Button");
    if (isButton){
        const equalSignPressed = (event.target.textContent === "=");
        if(equalSignPressed && (y != "")){
            x = display.textContent = operate(x, y, operator);
            y = operator = "";
        }
    }
}

const clear = function(event){
    const isButton = event.target.classList.contains("Button");
    if (isButton){
        const clearButtonPressed = (event.target.textContent === "C");
        if (clearButtonPressed){
            x = y = operator = display.textContent = "";
        }
    }
}

buttons.addEventListener("click", displayFormula);

buttons.addEventListener("click", calculate);

buttons.addEventListener("click", clear);




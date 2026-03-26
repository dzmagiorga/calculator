let display = document.querySelector("#display");
let buttons = document.querySelector("#buttons");

let x, y, operator;
x = y = operator = "";
display.textContent = "";

const add = (x, y) => Number(x) + Number(y);

const subtract = (x, y) => Number(x) - Number(y);

const multiply = (x, y) => Number(x) * Number(y);

const divide = (x, y) => Number(x) / Number(y);

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

buttons.addEventListener("click", (event) => {
    const isButton = event.target.classList.contains("Button");
    if (isButton){
        const buttonValue = event.target.textContent;
        if (buttonValue.match(/[0-9]/g)){
            if(operator === ""){
                x += buttonValue;
                display.textContent += buttonValue;
            }
            y += buttonValue;
            display.textContent += buttonValue;
        }
        
    }
})


//A simple app to calculator app

var count = 0;
var displayString = " ";
var operator = null;
var number1 = null;
var number2 = null;
var result = null;
var displayElement = document.getElementById("display-el");

function updateDisplay() { 
    displayElement.textContent = displayString;
}

function input(val) {
    
    displayString += val;
    updateDisplay();

    if (number1 == null && operator == null && number2 == null) {
        number1 = val;
    } else if (number1 != null && operator == null && number2 == null) {
        operator = val;
    } else if (number1 != null && operator != null && number2 == null) {
        number2 = val;
    }


}

function setOperator(newOperator) {
    operator = newOperator;
}

function setDisplay(newDisplay) {
    displayString = newDisplay;
}

function clearInput() {
    displayString = " ";
    updateDisplay();
    var operator = null;
    var number1 = null;
    var number2 = null;
    
}

function compute() {
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } if (operator == '/') {
        result = number1 / number2;
    } 
    displayResult();
}

function displayResult() {
    clearInput();
    displayString += result;
    var result = null;
}






let display = document.getElementById('display');
const clear = document.getElementById('clear');
const buttons = document.querySelectorAll('button');
let displayValue = 0;
let num1 = 0;
let operation = '';
let num2 = 0;
display.innerHTML = 0;

//Basic operations
let add = function(num1, num2) {
    return num1 + num2;
}
let substract = function(num1, num2) {
    return num1 - num2;
}
let multiply = function(num1, num2) {
    return num1 * num2;
}
let divide = function(num1, num2) {
    return num1 / num2;
}

//Operate function
let operate = function(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return substract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    } else return num1
}

//Function to clear the calculator
let clearDisplay = function() {
    num1 = 0;
    num2 = 0;
    operation = '';
    displayValue = 0;
    display.innerHTML = 0;
    console.log('Display cleared')
}

// Main function for buttons selections and calculations
let buttonSelector = function() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].value == 'clear') {
                clearDisplay();
            } else if (buttons[i].className == 'number') {
                if (num1 == displayValue && operation == '') {
                    clearDisplay();
                }
                if (display.innerHTML == 0) {
                    display.innerHTML = buttons[i].value;
                } else 
                display.innerHTML += buttons[i].value;
                if (operation == '') {
                    num1 += buttons[i].value;
                } else num2 += buttons[i].value;
            } else if (buttons[i].className == 'operator') {
                if (display.innerHTML.includes('+')) {
                    console.log('operator already included')
                } else if (display.innerHTML.includes('-') && operation !== '') {
                    console.log('operator already included')
                } else if (display.innerHTML.includes('/')) {
                    console.log('operator already included')
                } else if (display.innerHTML.includes('*')) {
                    console.log('operator already included')
                } else display.innerHTML += buttons[i].value;
                if (operation == '') {
                    operation = buttons[i].value
                    console.log(operation)
                } else console.log('operation already included')
            } else if (buttons[i].className == 'equals') {
                displayValue = operate(num1, operation, num2);
                console.log(`${display.innerHTML} equals ${displayValue}`);
                display.innerHTML = displayValue;
                num1 = displayValue;
                num2 = 0;
                operation = '';
            }
      });
    }
}

buttonSelector();
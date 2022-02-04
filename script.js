let display = document.getElementById('display')
const clear = document.getElementById('clear')

display.innerHTML = 0

let add = function(num1, num2) {
    return num1 + num2
}

let substract = function(num1, num2) {
    return num1 - num2
}

let multiply = function(num1, num2) {
    return num1 * num2
}

let divide = function(num1, num2) {
    return num1 / num2
}


let operate = function(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return substract(num1, num2)
    } else if (operator == '*') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return divide(num1, num2)
    }

}

clear.addEventListener('click', function (event) {
    display.innerHTML = 0
})



display.innerHTML = operate(4, '*', 4)
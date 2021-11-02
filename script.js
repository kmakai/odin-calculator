function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;

}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {

    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    }
}

const numButton = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelector('.operatBtn');
const currentOperation = document.querySelector('.currentOperation');
const clearBtn = document.querySelector('.clearBtn');

numButton.forEach(element => {
    element.addEventListener('click',function(){
        console.log(element.textContent);
        currentOperation.textContent += this.textContent;
    })
})


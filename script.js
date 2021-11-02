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
const operatorBtn = document.querySelectorAll('.operateBtn');
const currentOperation = document.querySelector('.currentOperation');
const clearBtn = document.querySelector('.clearBtn');
const lastOperator = document.querySelector('.lastOperation');
const equalsBtn = document.querySelector('.equalsBtn');
let op;
let a;
let b;
numButton.forEach(element => {
    element.addEventListener('click', function () {
        if (currentOperation.textContent === '0') {
            currentOperation.textContent = this.textContent;
        } else {
            currentOperation.textContent += this.textContent;
        }
    })
})

clearBtn.addEventListener('click', function () {
    currentOperation.textContent = 0;
    lastOperator.textContent = '';
})

operatorBtn.forEach(element => {
    element.addEventListener('click', function () {
        op = element.textContent;
        a = currentOperation.textContent;
        a = Number(a);
        lastOperator.textContent += a +' '+ op + ' ';
        currentOperation.textContent = 0;
    })
})

equalsBtn.addEventListener('click',function(){
    b = currentOperation.textContent;
    lastOperator.textContent += b;
    b = Number(b);
    if(op === '/' && b === 0){currentOperation.textContent = "Black hole"}else{
    const ans = operate(op,a,b);
    currentOperation.textContent = Math.round(ans * 100) / 100;}
})


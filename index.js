// Global Numbers
let firstNum = '';
let secondNum = '';

// Switch between first number input and second input
let firstEntry = true;
let secondEntry = false;

// selected operation
let operation = '';

//Number(s) input
function press(key) {
    if(firstEntry) {
        firstNum += ''+key;
    } else {
        secondNum += ''+key;
    }
    updateDisplay();
}

//Display the number as input/press
let display = document.querySelector("#display");
function updateDisplay(){
    let num = null;
    if(firstEntry) {
        num = firstNum;
    } else {
        num = secondNum;
    }
    display.innerHTML = num;
}

// Operator choosen function
function setOP(key) {
    clear();
    firstEntry = false;
    secondEntry = true;
    switch(key) {
        case '/':
            operation = 'divide';
            break;
        case '*':
            operation = 'multiple';
            break;
        case '-':
            operation = 'subtract';
            break;
        case '+':
            operation = 'add';
            break;
        default:
            break;
    }
}

// Clear display
function clear() {
    display.innerHTML = 0;
}

// Equal Sign 
function calculate() {
    let first = Number(firstNum);
    let second = Number(secondNum);
    let num = null;
    if(operation == 'divide') {
        num = first/second;
    } else if (operation == 'multiple') {
        num = first * second;
    } else if (operation == 'subtract') {
        num = first - second;
    } else if (operation == 'add') {
        num = first + second;
    } else {
        if(firstEntry) {
            num = first;
        } else {
            num = second;
        }
    }
    if(operation != null) {
        firstNum = num;
        secondNum = '';
        operation = null;
    }
    display.innerHTML = num;
}

//clear (C) button
function clr() {
    if(firstEntry) {
        firstNum = '';
    } else if(operation != null) {
        firstNum = '';
        operation = null;
        firstEntry = true;
        secondEntry = false;
    } else {
        secondNum = '';
        operation = null;
    }
    clear();
}
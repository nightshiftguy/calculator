function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    let solution;

    switch(operator){
        case add: solution = add(a,b); break;
        case subtract: solution = subtract(a,b); break;
        case multiply: solution = multiply(a,b); break;
        case divide: solution = divide(a,b); break;
        default: console.log("xd"); break;
    }

    return solution;
}

const numericKeyboardBtns = document.querySelectorAll(".num");
const operatorsBtns = document.querySelectorAll(".operator");
let firstNumber, secondNumber, operator;

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
    a = Number(a);
    b = Number(b);

    switch(operator){
        case 0: solution = add(a,b); break;
        case 1: solution = subtract(a,b); break;
        case 2: solution = multiply(a,b); break;
        case 3: solution = divide(a,b); break;
        default: console.log("xd"); break;
    }

    return solution;
}

const numericKeyboardBtns = document.querySelectorAll(".num");
const operatorsBtns = document.querySelectorAll(".operator");
const output = document.querySelector("#output");
const clearBtn = document.querySelector("#clear");
const operateBtn = document.querySelector("#operate");

function updateOutput(){
    let content = "";
    if(firstNumber !== undefined){
        content+=firstNumber;
    }
    if(operator !== undefined){
        content+=operator;
    }
    if(secondNumber !== undefined){
        content+=secondNumber;
    }
    output.textContent=content;
}

function addNumber(event){
    keyNumber = event.currentTarget.keyNumber;
    if(operator === undefined){
        if(firstNumber === undefined)   firstNumber = "";
        firstNumber += ""+keyNumber;
    }
    else if(operator !== undefined){
        if(secondNumber === undefined)   secondNumber = "";
        secondNumber += ""+keyNumber;
    }
    updateOutput();
}

for(let i=0; i<numericKeyboardBtns.length; i++){
    numericKeyboardBtns[i].keyNumber = i;
    numericKeyboardBtns[i].addEventListener("click",addNumber);
}

function addOperator(event){
    let keyOperator = event.currentTarget.keyOperator;
    if(firstNumber !== undefined && secondNumber === undefined){
        operator = keyOperator;
    }
    updateOutput();
}

function clear(){
    firstNumber= undefined;
    secondNumber = undefined;
    operator = undefined;
    output.textContent = "";
}

for(let i=0; i<operatorsBtns.length; i++){
    operatorsBtns[i].keyOperator = operatorsBtns[i].textContent;
    operatorsBtns[i].addEventListener("click",addOperator);
}

clearBtn.addEventListener("click", clear);
operateBtn.addEventListener("click", () =>{
    let outcome = operate(operator);
    clear();
    firstNumber=outcome;
    updateOutput();
});
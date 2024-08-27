let firstNumber, secondNumber, operator;

const numericKeyboardBtns = document.querySelectorAll(".num");
const operatorsBtns = document.querySelectorAll(".operator");
const output = document.querySelector("#output");
const clearBtn = document.querySelector("#clear");
const operateBtn = document.querySelector("#operate");

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
    if(b===0) {
        return "error";
    }
    return a/b;
}

function operate(operator,a,b){
    let solution;
    
    a= +a;
    b= +b;
    switch(operator){
        case "+": solution = add(a,b); break;
        case "-": solution = subtract(a,b); break;
        case "*": solution = multiply(a,b); break;
        case ":": solution = divide(a,b); break;
        default: console.log("xd"); break;
    }

    if(solution !== "error")    solution = parseFloat(solution.toFixed(3));

    return solution;
}

function computeAndUpdateOutput(){
    if(secondNumber === undefined) return;
    let outcome = operate(operator,firstNumber,secondNumber);
    clear();
    if(outcome!=="error"){
        firstNumber=outcome;
        updateOutput();
    }
    else{
        output.textContent = ";)";
        return;
    }
}

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
        if(firstNumber === "0")   firstNumber=keyNumber;
        else    firstNumber += ""+keyNumber;
    }
    else if(operator !== undefined){
        if(secondNumber === undefined)   secondNumber = "";
        if(secondNumber === "0")   secondNumber=keyNumber;
        else    secondNumber += ""+keyNumber;
    }
    updateOutput();
}

function addOperator(event){
    let keyOperator = event.currentTarget.keyOperator;

    if(firstNumber !== undefined){
        if(secondNumber === undefined){
            operator = keyOperator;
            updateOutput();
        }
        else if(secondNumber !== undefined){
            computeAndUpdateOutput();
            operator=keyOperator;
            updateOutput();
        }
    }
}

function clear(){
    firstNumber= undefined;
    secondNumber = undefined;
    operator = undefined;
    output.textContent = "";
}

for(let i=0; i<numericKeyboardBtns.length; i++){
    numericKeyboardBtns[i].keyNumber = i;
    numericKeyboardBtns[i].addEventListener("click",addNumber);
}

for(let i=0; i<operatorsBtns.length; i++){
    operatorsBtns[i].keyOperator = operatorsBtns[i].textContent;
    operatorsBtns[i].addEventListener("click",addOperator);
}

clearBtn.addEventListener("click", clear);

operateBtn.addEventListener("click", computeAndUpdateOutput);
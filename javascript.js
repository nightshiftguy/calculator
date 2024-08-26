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


function addNumber(event){
    n = event.currentTarget.keyNumber;
    if(operator === undefined){
        if(firstNumber === undefined)   firstNumber = "";
        firstNumber += ""+n;
    }
    else if(operator !== undefined){
        if(secondNumber === undefined)   secondNumber = "";
        secondNumber += ""+n;
    }
}

for(let i=0; i<numericKeyboardBtns.length; i++){
    numericKeyboardBtns[i].keyNumber = i;
    numericKeyboardBtns[i].addEventListener("click",addNumber);
}

//upgrade addNumber to make it update output
//add function to add operators
//add listener to compute output
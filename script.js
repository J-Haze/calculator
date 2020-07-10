function add(a,b) {
  a = a*1000000;
  b = b*1000000;
  const add = a + b;
	return add/1000000
};

function subtract(a,b) {
  a = a*1000000;
  b = b*1000000;
  const subtract = a - b;
	return subtract/1000000
};

function multiply(a,b) {
	const multiply = Number(a*b);
	return multiply
};

function divide(a,b){
    const answer = a/b;
    return answer
};

function operate(storedOperator,storedNumber,displayedNumber){
  num1 = Number(storedNumber);
  num2 = Number(displayedNumber);

  if (storedOperator == "+"){
      answer = add(num1,num2)
    }
    if (storedOperator == "-"){
      answer = subtract(num1,num2)
    }
    if (storedOperator == "X"){
      answer = multiply(num1,num2)
    }
    if (storedOperator == "÷"){
      answer = divide(num1,num2)
    }
    if (storedOperator == "="){
    }
    checkAnswer = String(answer)
    if (checkAnswer.length > 12){
      answer = answer.toExponential(2);
  }
  return answer
}

const display = document.querySelector('#display');
const buttons = document.querySelector('.btn');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const topBtns = document.querySelectorAll('.top');

let enteredNumber = "";
let storedNumber = 0;
let displayedNumber = 0;
let storedOperator = "+";
let equalSign = "false";

display.innerHTML = displayedNumber;

function clear(){
  enteredNumber = "";
  storedNumber = 0;
  displayedNumber = 0;
  storedOperator = "+"
  display.innerHTML = displayedNumber;
  equalSign = "false";
}

function dig(value){
  checkString = String(enteredNumber);
  if (checkString.length < 12){
    if(value == "." && checkString.includes(".")){
      return
    };
    if (equalSign == true){clear()
    };

    enteredNumber = enteredNumber + value;
    displayedNumber = enteredNumber;
    display.innerHTML = displayedNumber;
    enteredNumber = String(enteredNumber);
  }
}

function op(value) {

  checkDot = String(enteredNumber)
  if(checkDot.includes(".")){
    enteredNumber = String(enteredNumber);
    enteredNumber = parseFloat(enteredNumber).toFixed(enteredNumber.split('.')[1].length);
    enteredNumber = Number(enteredNumber);
  }else{
    enteredNumber = Number(enteredNumber);
  };

  displayedNumber = operate(storedOperator,storedNumber,displayedNumber);
  display.innerHTML = displayedNumber;

  if (value != "="){
    storedOperator = value;
    storedNumber = Number(displayedNumber);
    enteredNumber = "";
    equalSign = false;
  } else {
    storedOperator = "+";
    equalSign = true;
    storedNumber = Number(0);
    enteredNumber = Number(displayedNumber);
  };
}

topBtns.forEach(top => top.addEventListener('click', () => {
if (top.firstChild.nodeValue == "A/C"){
  clear();
} else if (top.firstChild.nodeValue == "⇤"){
    enteredNumber = String(enteredNumber);
    enteredNumber = Number(enteredNumber.substring(0, enteredNumber.length-1));
    displayedNumber = enteredNumber;
    display.innerHTML = displayedNumber;
} else if (top.firstChild.nodeValue == "+/-"){
    enteredNumber = (enteredNumber * -1);
    displayedNumber = enteredNumber;
    display.innerHTML = displayedNumber;
} else if (top.firstChild.nodeValue == "%"){
    enteredNumber = (enteredNumber / 100);
    displayedNumber = enteredNumber;
    display.innerHTML = displayedNumber;
} else{
}
}));

operators.forEach(operator => operator.addEventListener('click', () => {
  op(operator.firstChild.nodeValue);
}));

digits.forEach(digit => digit.addEventListener('click', () => {
  dig(digit.firstChild.nodeValue);
}));


function add(a,b) {
	const add = a + b;
	return add
}

function subtract(a,b) {
	const subtract = a - b;
	return subtract
}

function multiply(a,b) {
	multiply = a*b;
	return multiply
}

function divide(a,b){
    answer = a/b;
    return answer
}


// function power(a,b){
// 	power = Math.pow(a,b);
//   return power
// }

// function factorial(a){
// 	array = [];
//   for (i = 1; i < (a+1); i++){
//     array.push(i);
//   }
//   total = 1;
//   const fact = array.reduce((total, number) =>{
//     return total * number;
//   }, 1);
//   return fact
// }

function operate(storedOperator,storedNumber,displayedNumber){
  num1 = Number(storedNumber);
  console.log("type", typeof(num1))
  num2 = Number(displayedNumber);
  storedOperator = storedOperator;
  if (storedOperator == "+"){
      return add(num1,num2)
    }
    if (storedOperator == "-"){
       return subtract(num1,num2)
    }
    if (storedOperator == "X"){
        return multiply(num1,num2)
    }
    if (storedOperator == "/"){
       return divide(num1,num2)
    }
    if (storedOperator == "="){
      
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('.btn');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let enteredNumber = "";
let storedNumber = 0;
let displayedNumber = 0;
let storedOperator = "+"


display.innerHTML = displayedNumber;





operators.forEach(operator => operator.addEventListener('click', () => {
  console.log("storedOperator1: ", storedOperator, "storedNumber1: ", storedNumber, "displayedNumber1: ", displayedNumber, "enteredNumber1:", enteredNumber)
  displayedNumber = operate(storedOperator,storedNumber,displayedNumber);
  display.innerHTML = displayedNumber;

  if (operator.firstChild.nodeValue != "="){
    storedOperator = operator.firstChild.nodeValue;
    storedNumber = displayedNumber;
    enteredNumber = Number(0);
  } else {
    storedOperator = "+";
    storedNumber = Number(0);
    enteredNumber = Number(displayedNumber);
  }
  
  console.log("storedOperator2: ", storedOperator, "storedNumber2: ", storedNumber, "displayedNumber2: ", displayedNumber, "enteredNumber2:", enteredNumber)

}));

digits.forEach(digit => digit.addEventListener('click', () => {
  console.log('button value: ', digit.firstChild.nodeValue)

  console.log("enteredNumber1: ", enteredNumber)

  enteredNumber = Number(enteredNumber + digit.firstChild.nodeValue);
  console.log("enteredNumber2: ", enteredNumber)

  displayedNumber = enteredNumber;
  display.innerHTML = displayedNumber;
  console.log("displayeNumber: ", displayedNumber);

}));
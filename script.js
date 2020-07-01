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

// console.log('test ', operate('+',[1,3,5]))

const display = document.querySelector('#display');
const buttons = document.querySelector('.btn');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let enteredNumber = "";
let storedNumber = 0;
let displayedNumber = 0;
let storedOperator = "+"
// let arr = [stored,displayed,entered];
// let first = 0;

// displayText = displayedNumber;

display.innerHTML = displayedNumber;

// let buttonValues = [
//   {'1'}
// ]




operators.forEach(operator => operator.addEventListener('click', () => {
  console.log("storedOperator: ", storedOperator, "storedNumber: ", storedNumber, "displayedNumber: ", displayedNumber)
  displayedNumber = operate(storedOperator,storedNumber,displayedNumber);
  display.innerHTML = displayedNumber;

  storedOperator = operator.firstChild.nodeValue;

  storedNumber = displayedNumber;

  enteredNumber = ""
  
  // displayed = stored;
  // arr = [stored,displayed,entered];
  // displayText = arr[1];
  // display.innerHTML = displayText;

  // //calculate new stored value
  // action = operator.firstChild.nodeValue;
  // stored = operate(action, arr);
  // arr = [stored,displayed,entered];
  // first = first + 1;
  
  // displayText = arr[1];
  // display.innerHTML = displayText; //eventaully move this to the start of this event listener
  // console.log('operator value: ', operator.firstChild.nodeValue)
  // console.log('operator type ', typeof operator.firstChild.nodeValue);
  // action = operator.firstChild.nodeValue;
  // console.log('action: ', action);
  // console.log('action type ', typeof action);

  // a = b;
  // // arr = [a,b];
  // b = operate(action, arr);
  // arr = [a,b];
  // // displayText = arr[1];
  // console.log(arr)
}));

digits.forEach(digit => digit.addEventListener('click', () => {
  console.log('button value: ', digit.firstChild.nodeValue)
  //code about appending or starting a new number (if number then append, etc)
  // if (first==0){stored = digit.firstChild.nodeValue
  // } else{
  //     stored = displayed;
  // }
  console.log("enteredNumber1: ", enteredNumber)

  enteredNumber = enteredNumber + digit.firstChild.nodeValue;
  console.log("enteredNumber2: ", enteredNumber)

  displayedNumber = enteredNumber;
  display.innerHTML = displayedNumber;
  console.log("displayeNumber: ", displayedNumber);

  //need to append an active string for b, because b can be double digits
  //also make it work for '.' (if . then append (in opperation if 2. then add 0 to make 2.0))
  // arr = [stored,displayed,entered];
  // displayText = arr[1];
  // display.innerHTML = displayText;
  // console.log(arr)
}));
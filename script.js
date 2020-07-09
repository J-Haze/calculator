function add(a,b) {
	const add = a + b;
	return add
};

function subtract(a,b) {
	const subtract = a - b;
	return subtract
};

function multiply(a,b) {
	const multiply = Number(a*b);
	return multiply
};

function divide(a,b){
    const answer = a/b;
    return answer
};


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
  // storedOperator = storedOperator;
  if (storedOperator == "+"){
      return add(num1,num2)
    }
    if (storedOperator == "-"){
       return subtract(num1,num2)
    }
    if (storedOperator == "X"){
      // console.log("Num1:", num1, "type1:", typeof(num1), "type2:", "Num2: ", num2, typeof(num2))
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
const topBtns = document.querySelectorAll('.top');

// buttons.forEach(button => button.addEventListener('click', () => {
//   button.classList.add("selected");
// }));

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
  console.log("length:", enteredNumber.length )

  checkString = String(enteredNumber); //converts to a string
  if (checkString.length < 12){
  console.log('button value: ', value, typeof(value))

  console.log("enteredNumber1: ", enteredNumber, typeof(enteredNumber))
  console.log('storedNumber: ', storedNumber)
  console.log('storedOperator: ', storedOperator)
  if (equalSign == true){clear()};

  // if(checkString[enteredNumber.length-1] == "0" &&  checkString[enteredNumber.length-2] == "."){
  //   enteredNumber = toString(enteredNumber).slice(0,-1);} //removes 0 if there is a "."

  // enteredNumber = String(enteredNumber);
  enteredNumber = enteredNumber + value;
  // enteredNumber = String(enteredNumber);
  console.log("enteredNumber2: ", enteredNumber)

  displayedNumber = enteredNumber;
  display.innerHTML = displayedNumber;
  console.log("displayeNumber: ", displayedNumber);

  // if(enteredNumber[enteredNumber.length-1] == "."){
  //   console.log("concate 0: ", enteredNumber, typeof(enteredNumber))
  //   enteredNumber = enteredNumber.concat("0"); //if the last char is a "." then it adds a "0" so that the math still works
  //   console.log("concate 0_1: ", enteredNumber, typeof(enteredNumber))
  // };
  
  enteredNumber = String(enteredNumber);

// if(enteredNumber.includes(".")){
//   enteredNumber = parseFloat(enteredNumber).toFixed(enteredNumber.split('.')[1].length); //converts to a number again
//   console.log("concate 0_2: ", enteredNumber, typeof(enteredNumber))
//   }


  // else{
  //   enteredNumber = Number(enteredNumber);
  // }
  console.log("Final Type: ", typeof(enteredNumber))
  }
}

function dott(){

}

function op(value) {
  console.log("storedOperator1: ", storedOperator, "storedNumber1: ", storedNumber, "displayedNumber1: ", displayedNumber, "enteredNumber1:", enteredNumber, typeof(enteredNumber))
  
  //converts to a number
  //has issues because you can't use "includes" on a Number
  checkDot = String(enteredNumber)
  if(checkDot.includes(".")){
    enteredNumber = String(enteredNumber);
    enteredNumber = parseFloat(enteredNumber).toFixed(enteredNumber.split('.')[1].length);
    enteredNumber = Number(enteredNumber);
  }else{
    // storedNumber = Number(enteredNumber);
    enteredNumber = Number(enteredNumber);
  };
  console.log("Converted Type: ", typeof(enteredNumber))

  displayedNumber = operate(storedOperator,storedNumber,displayedNumber);
  display.innerHTML = displayedNumber;

  if (value != "="){
    storedOperator = value;
    storedNumber = Number(displayedNumber);
    // enteredNumber = Number(0);
    // enteredNumber = Number("");
    enteredNumber = "";
    equalSign = false;
  } else {
    storedOperator = "+";
    equalSign = true;
    storedNumber = Number(0);
    // enteredNumber = Number(displayedNumber);
    enteredNumber = Number(displayedNumber);
  };
  console.log("storedOperator2:", storedOperator, "storedNumber2:", storedNumber, "displayedNumber2:", displayedNumber, "enteredNumber2:", enteredNumber)
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
  console.log('Error')
}
}));

operators.forEach(operator => operator.addEventListener('click', () => {
  op(operator.firstChild.nodeValue);
}));

digits.forEach(digit => digit.addEventListener('click', () => {
  dig(digit.firstChild.nodeValue);
}));




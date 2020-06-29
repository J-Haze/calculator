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

function power(a,b){
	power = Math.pow(a,b);
  return power
}

function factorial(a){
	array = [];
  for (i = 1; i < (a+1); i++){
    array.push(i);
  }
  total = 1;
  const fact = array.reduce((total, number) =>{
    return total * number;
  }, 1);
  return fact
}

function operate(operator,a,b){
    if (operator == "+"){
       return add(a,b)
    }
    if (operator == "-"){
       return subtract(a,b)
    }
    if (operator == "*"){
        return multiply(a,b)
    }
    if (operator == "/"){
       return divide(a,b)
    }
}





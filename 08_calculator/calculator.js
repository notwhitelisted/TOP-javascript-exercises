const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(max, min) {
	return max - min;
};

const sum = function(arr) {
	let summation = 0;
  for (let i = 0; i < arr.length; i++) {
    summation += arr[i];
  }
  return summation;
};

const multiply = function(arr) {
  let multiplyy = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplyy *= arr[i];
  }
  return multiplyy;
};

const power = function(num, exp) {
	return Math.pow(num, exp);
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  };

  let total = 0;
  total += number;

  while (number > 1) {
    total *= (number-1);
  number--;
  }
  return total;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

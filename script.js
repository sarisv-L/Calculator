'use strict';

let firstNum = 0;
let secondNum = 0;
const operators = ['+', '-', '*', '/'];

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNum, secondNum, op) {
  if (op === operators[0]) {
    return add(firstNum, secondNum);
  } else if (op === operators[1]) {
    return subtract(firstNum, secondNum);
  } else if (op === operators[2]) {
    return multiply(firstNum, secondNum);
  } else if (op === operators[3]) {
    return divide(firstNum, secondNum);
  }
}

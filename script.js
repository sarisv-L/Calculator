'use strict';

let firstNum = 0;
let secondNum = 0;
let dispNum = '';

const disp = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('#clear');

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

// const container = document.querySelector(".container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = dispNum;
disp.appendChild(content);

// Iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    dispNum += button.textContent;
    content.textContent = dispNum;
    console.log(dispNum);
  });
});

clear.addEventListener('click', () => {
  content.textContent = '';
  dispNum = '';
});

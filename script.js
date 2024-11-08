'use strict';
let currValue = '';
let prevValue = '';
let currOperation = null;
let resetDisplay = false;
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const previousNumberText = document.querySelector('[data-previous-number]');
const currentNumberText = document.querySelector('[data-current-number]');
currentNumberText.textContent = '0';

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

function clear() {
  currentNumberText.textContent = '0';
  previousNumberText.textContent = '';
  currValue = '';
  prevValue = '';
  currOperation = null;
}

operationButtons.forEach(button => {
  button.addEventListener('click', () => setOperation(button.textContent));
});
numberButtons.forEach(button => {
  // and for each one we add a Event listener
  button.addEventListener('click', () => appendNumber(button.textContent));
});

function appendNumber(number) {
  if (currentNumberText.textContent === '0' || resetDisplay) resetScreen();
  currentNumberText.textContent += number;
  if (
    currentNumberText.textContent === '.' &&
    currentNumberText.textContent.includes('.')
  )
    return;
}

function resetScreen() {
  currentNumberText.textContent = '';
  resetDisplay = false;
}

function setOperation(operator) {
  if (currOperation !== null) evaluate();
  prevValue = currentNumberText.textContent;
  currOperation = operator;
  previousNumberText.textContent = `${prevValue} ${currOperation}`;
  // currentNumberText.textContent = '';
  resetDisplay = true;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function evaluate() {
  currValue = currentNumberText.textContent;
  previousNumberText.textContent = `${prevValue} ${currOperation} ${currValue} =`;

  currentNumberText.textContent = roundResult(
    operate(prevValue, currValue, currOperation),
  );
  currOperation = null;

  // currentNumberText.textContent = operate(currValue, prevValue, currOperation);
}

function add(a, b) {
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  else return a / b;
}

function operate(a, b, op) {
  if (op === '+') {
    return add(a, b);
  } else if (op === '-') {
    return subtract(a, b);
  } else if (op === '*') {
    return multiply(a, b);
  } else if (op === '/') {
    return divide(a, b);
  }
}

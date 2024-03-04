'use strict';

const numberButtons = document.getElementById('.normal');
const upperButtons = document.getElementById('.light');
const darkButtons = document.getElementById('.dark');

let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
  }

  function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
  }

  function appendDecimal() {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      updateDisplay();
    }
  }

  function clearDisplay() {
    currentInput = '';
    updateDisplay();
  }

  function toggleSign() {
    if (currentInput !== '' && currentInput !== '0') {
      currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
      updateDisplay();
    }
  }

  function calculatePercentage() {
    // Assuming percentage is calculated on the last number
    const lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
    const percentage = parseFloat(lastNumber) / 100;
    currentInput = currentInput.replace(/[\d\.]+$/, percentage);
    updateDisplay();
  }

  function calculateResult() {
    try {
      const result = eval(currentInput);
      currentInput = result.toString();
      updateDisplay();
    } catch (error) {
      currentInput = 'Error';
      updateDisplay();
    }
  }

  function updateDisplay() {
    document.getElementById('result').innerText = currentInput;
  }


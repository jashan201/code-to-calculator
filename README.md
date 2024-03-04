### Features

* Addition, subtraction, multiplication, and division operations.
* Clear button to reset the calculator.
* Responsive design for various screen sizes.

### Usage

1. Enter the numbers using the on-screen buttons.
2. Use the operation buttons (+, -, *, /) to perform calculations.
3. Click the "C" button to clear the input and start a new calculation.

### Development

## HTML

To create structure of a calculator, follow this ```HTML``` code
we will make the structure in a ```table``` like this:
```HTML
<table>
    <tbody>
        <tr>
          <td><button class="light" onclick="clearDisplay()">C</button></td>
          <td><button class="light" onclick="toggleSign()">-/+</button></td>
          <td><button class="light" onclick="calculatePercentage()">%</button></td>
          <td><button class="dark" onclick="appendOperator('/')">/</button></td>
        </tr>
    </tbody>
</table>
```
repeat this to compleate all the buttons of calculator

## CSS 

to make the calculator look better, we will add some basic ```css``` code:
```css
p {
    background-color: rgb(219, 220, 220);
    border: 1px solid rgb(27, 27, 27);
    margin-top: 50px;
    width: 190px;
    height: 35px;
    font-size: 28px;
    font-weight: 600;
    text-align: end;
    padding-top: 5px;
}

button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: 600;
    font-size: 18px;
}
```
Here p is the ```input type = text``` section, where result would be displayed.
style every button according to your requirements


## Javascript

to make our calculator work, we certainly need a ```Javascript``` code
which should be like this:
```Javascript
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
  }

  // same for other related functions

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
```

click [here](https://jashan201.github.io/code-to-calculator/) to test the application

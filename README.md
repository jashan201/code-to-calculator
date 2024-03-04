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
same for other rows of buttons
repeat this to compleate all the buttons of calculator

## CSS 

to make the calculator look better, we will add some basic ```css``` code:
```css
/* style every button according to your choice while keeping the same details */

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


  // function to clear the display
  function clearDisplay() {
    currentInput = '';
    updateDisplay();
  }

  // need togle function for brackets ()

  // next, a function for calculating percentage


  // and finally for the result:
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
## Demo
click [here](https://jashan201.github.io/code-to-calculator/) to test the application

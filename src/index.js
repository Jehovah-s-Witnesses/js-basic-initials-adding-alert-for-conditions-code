const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');
let result;

if (firstNumber) {
  if (secondNumber) {
    result = firstNumber + secondNumber;
  } else {
    alert('Invalid second number');
  }
} else {
  alert('Invalid first number');
}

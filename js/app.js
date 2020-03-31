
const screen = document.querySelector('.output'),
currentOperand = document.querySelector('.currentOperand'),
buttons = document.querySelectorAll('.buttons'),
deleteKey = document.querySelector('.delete'),
keyOperators = document.querySelectorAll('.keyOperator'),
operating = false
operators = [ '+', '-', 'x', '/', '=', 'cl'], /* help us to build up our row of operator buttons */
buffer = '', /* keeps the current number in memory */
currentResult = 0, /* updated after each operation */
numberScreen = 'screen'
currentOperation = ''; /* this array will hold each number n operation */



function clearScreen() {
  currentOperand.innerHTML = '0';  
}
 function isLastEnteredNum() {

 }







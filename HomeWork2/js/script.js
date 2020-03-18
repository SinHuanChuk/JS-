'use strict'

let userInput;
let numbers = [];
let total = 0;

do {
  userInput = Number(prompt('Введите любое число'));
  numbers.push(userInput);
} while (userInput !== 0)

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
alert(`сумма ваших чисел равняется ${total}`);
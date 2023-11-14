'use strict';

const diceNum = parseInt(prompt("Please give the number of dice rolls"));

const selectedSlot = document.querySelector('.slot');

let sum = 0;

let roll;

for (let i = diceNum; i >0; i--) {
  roll = (parseInt(Math.random() * (7 - 1) + 1));
  console.log(roll);
  sum = sum + roll;
}
console.log("This is sum")
console.log(sum);
selectedSlot.innerHTML = `Sum is ${sum}`;

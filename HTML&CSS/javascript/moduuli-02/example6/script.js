'use strict';

/*

Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. Write a main
program that rolls the dice until the result is 6. The main
program should print out the result of each roll in an unordered
 list (<ul>). (2p)
 */

let roll;

const selectedSlot = document.querySelector('.slot');



  function diceRoll() {
    roll = (parseInt(Math.floor(Math.random() * (7 - 1) + 1)));
    return roll;
  }
  let result = diceRoll()
  while (result !== 6){
    const listElement = document.createElement('li');
    selectedSlot.appendChild(listElement);
    listElement.innerHTML = result;
    result = diceRoll()
  }
 const listElement = document.createElement('li');
  selectedSlot.appendChild(listElement);
  listElement.innerHTML = result;

'use strict';

/*

Modify the function above so that it gets the number of sides on the dice as a parameter.
 With the modified function you can for example roll a 21-sided role-playing dice.
  The difference to the last exercise is that the dice rolling in the main program
   continues until the program gets the maximum number on the dice, which is asked from the
    user at the beginning. (2p)
 */

let roll;

const selectedSlot = document.querySelector('.slot');

  function diceRoll(sides) {
    roll = (parseInt(Math.ceil(Math.random() * (sides - 1 + 1))));
    console.log(roll);
    return roll;
  }
  let number = parseInt(prompt("Please give number of sides"));
  let result = diceRoll(number);
  while (result !== number && number >0){
    const listElement = document.createElement('li');
    selectedSlot.appendChild(listElement);
    listElement.innerHTML = result;
    result = diceRoll(number);
  }
   if (number <= 0){
    const listElement = document.createElement('li');
    selectedSlot.appendChild(listElement);
    listElement.innerHTML = 'Number smaller than zero, please try again.';
}
    const listElement = document.createElement('li');
    selectedSlot.appendChild(listElement);
    listElement.innerHTML = number;




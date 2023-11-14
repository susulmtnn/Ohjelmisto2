'use strict';

const userInput = parseInt(prompt("Please give a number to test for Prime numbers"));

const selectedSlot = document.querySelector('.slot');

for (let i = 2; i <=userInput; i++)
{
    if (userInput % i === 0 && userInput !== i)
    {
      selectedSlot.innerHTML = `${userInput} is divisible by other numbers than itself and therefore it is not a prime.`;
      break;
    }
    else if (i === userInput)
    {
      selectedSlot.innerHTML = `${userInput} is divisible only by 1 and itself and therefore it is a prime.`;

    }
}

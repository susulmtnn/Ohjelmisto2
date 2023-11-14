'use strict';

const userInput1 = parseInt(prompt("Please give start year"));

const userInput2=parseInt(prompt("Please give start year"));

const selectedSlot= document.querySelector('.lista');

for (let i = userInput1; i<=userInput2; i++)
{
  if (i % 100 !== 0 && i % 4 === 0 || i % 400 === 0)
  {
    const listElement = document.createElement('li');
    selectedSlot.appendChild(listElement);
    listElement.innerHTML = i;
  }
}
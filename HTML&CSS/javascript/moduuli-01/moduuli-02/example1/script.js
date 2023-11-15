/*
Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.

 */

'use strict'

let userInput = [];

userInput = prompt("Please give 5 numbers")

let newArray = [];

let a = 0;

for (let i=4; i >=0; i--)
  {
    if (a<5)
    {
      newArray[i]= userInput[a];
      a++;
    }
  }
console.log(newArray);




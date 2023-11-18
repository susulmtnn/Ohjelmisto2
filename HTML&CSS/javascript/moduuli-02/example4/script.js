'use strict';

/*
Write a program that asks the user for numbers
 until he gives zero. The given numbers are
 printed in the console from the largest to
  the smallest. (2p)
 */

let user_input = parseInt(prompt("Please give numbers. Program will only stop if you give a zero"));

let lista = [];

let reversedList = [];

let sortedList = [];

while (user_input !== 0) {
  lista[lista.length]= user_input;
  user_input =parseInt(prompt(
      "Please give numbers. Program will only stop if you give a zero"));
  sortedList = lista.sort((a, b) =>a-b);
  reversedList= sortedList.reverse();
}
console.log(reversedList);

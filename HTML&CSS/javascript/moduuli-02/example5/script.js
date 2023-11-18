'use strict';

/*
Write a program that prompts the user for numbers.
 When the user enters one of the numbers he previously
 entered, the program will announce that the number has
 already been given and stops its operation and then prints
  all the given numbers to the console in ascending order.
   (2p)
 */

let user_input = parseInt(prompt("Please give numbers. Program will only stop if you enter a number that has already been entered"));

let lista = [];

let checker = true;

let equal = false;


  if (lista.length == 0) {
      lista.push(user_input);
     }

while (checker===true) {
  user_input = parseInt(prompt(
          "Please give numbers. Program will only stop if you enter a number that has already been entered"));
  for (let i = 0; i < lista.length; i++) {
    if (user_input === lista[i]) {
      checker = false;
      equal=true;
      break;
    }
  }
  if (equal === true){
    break;
  }
  else{
    lista.push(user_input);
  }
}
  let sortedList = lista.sort((a, b) =>a-b);
  console.log(sortedList);
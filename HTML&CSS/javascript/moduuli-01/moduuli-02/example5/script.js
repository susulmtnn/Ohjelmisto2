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

console.log(lista.length);

  if (lista.length == 0) {
      lista.push(user_input);
      console.log(lista, "this is lista's 0 element")
     }

while (checker===true) {
  user_input = parseInt(prompt(
          "Please give numbers. Program will only stop if you enter a number that has already been entered"));
  for (let i = 0; i < lista.length; i++) {
    console.log(i);
    if (user_input === lista[i]) {
      console.log("equals");
      checker = false;
      equal=true;
      break;
    } else {
      console.log(user_input, lista[i]);
      console.log(lista);
      console.log("not equals");
    }
  }
  if (equal === true){
    console.log(lista);
  }
  else{
    lista.push(user_input);
    console.log(lista);
  }
}
  console.log(lista, "final lista");
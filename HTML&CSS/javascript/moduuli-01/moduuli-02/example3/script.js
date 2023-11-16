'use strict';

/*
Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
 */

let dogNames= [];

let word;

for (let i=1; i <=6; i++){
let userInput = prompt(`Please give names for 6 dogs. Dog number ${i}`);
dogNames[i-1]= userInput;
}
let alphabeticalNames= dogNames.sort();
console.log(alphabeticalNames)
let reverseNames = alphabeticalNames.reverse();
console.log(reverseNames);

const selectedSlot = document.querySelector('.slot');

const createdList = document.createElement('ul');

selectedSlot.appendChild(createdList);

for (let a = 1; a<=6; a++){
  let createdItem = document.createElement('li');
  createdList.appendChild(createdItem);
  createdItem.innerHTML = reverseNames[a-1];
  selectedSlot.appendChild(createdList);
}
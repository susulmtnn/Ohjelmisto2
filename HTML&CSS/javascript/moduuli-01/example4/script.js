'use strict';

let userInput = prompt("What's you name?")

let room = parseInt(Math.random() * (5- 1) +1);
console.log(room);

const selectedSlot= document.querySelector('.slot')

let roomName;

if (room === 1){
  roomName = 'Gryffindor';
  }
else if(room === 2){
  roomName= ' Slytherin';
  }
else if(room === 3){
  roomName = 'Hufflepuff';
  }
else if(room === 4){
  roomName = 'Ravenclaw';
  }

selectedSlot.innerHTML = `${userInput}, you are ${roomName}`;
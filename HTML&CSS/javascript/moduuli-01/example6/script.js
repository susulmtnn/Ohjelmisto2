'use strict';

const result = confirm('Should I calculate the square root?');

const selectedSlot = document.querySelector('.slot');

if (result) {
  const num = parseInt(prompt("Please give number"));
  if (num >= 0){
    let finalsqrt = Math.sqrt(num);
    selectedSlot.innerHTML = `Sqrt is ${finalsqrt}`;
  }
   else{
    selectedSlot.innerHTML = `The square root of a negative number is not defined`;
  }

}
else {
  selectedSlot.innerHTML = 'Sqrt not calculated';
}

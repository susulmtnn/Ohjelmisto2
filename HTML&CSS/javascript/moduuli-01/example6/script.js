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
    selectedSlot.innerHTML = `Sqrt cannot be calculated`;
  }

}
else {
  selectedSlot.innerHTML = 'Sqrt not calculated'
}

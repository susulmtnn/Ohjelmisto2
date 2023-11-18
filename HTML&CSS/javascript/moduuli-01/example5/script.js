
let userInput = parseInt(prompt("Anna vuosiluku"));

const selectedSlot= document.querySelector('.slot')

if ((userInput%100 !== 0) && (userInput%4 === 0) || (userInput % 400 ==0)){
  selectedSlot.innerHTML = 'leap year';
}

else {
  selectedSlot.innerHTML= 'Not a leap year';
}

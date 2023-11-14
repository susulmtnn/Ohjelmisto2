
let userInput = parseInt(prompt("Anna vuosiluku"));

const selectedSlot= document.querySelector('.slot')

if (userInput%100 !== 0 && userInput%4 === 0){
  selectedSlot.innerHTML = 'karkausvuosi'}
if (userInput%4 === 0 && userInput%400===0)
{
  selectedSlot.innerHTML ='karkausvuosi';
}
else {
  selectedSlot.innerHTML= 'Ei karkausvuosi';
}

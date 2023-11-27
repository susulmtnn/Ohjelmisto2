'use strict';
const names = ['John', 'Paul', 'Jones'];

const selectedList = document.querySelector("#target");

for (let i = 0; i< names.length; i++) {
  const createdElement = document.createElement('li');
  createdElement.innerHTML = names[i];
  selectedList.appendChild(createdElement);
}
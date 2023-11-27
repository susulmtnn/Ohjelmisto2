'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const selectedList = document.querySelector("#target");


  console.log(students[0]);

for (let i in students) {
  const createdElement = document.createElement('option');
  const person = students[i];
  createdElement.textContent = person.name;
  createdElement.value = person.id;
  selectedList.appendChild(createdElement)
}

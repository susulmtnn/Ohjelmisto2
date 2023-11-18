/*
Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants. Finally,
the program prints the names of the participants on the web page in an
ordered list (<ol>) in alphabetical order. (2p)
 */

'use strict'

const num = parseInt(prompt("Please write the number of participants"));

  let listOfParticipants = [];

  const selectedDiv = document.querySelector('.slot');

  const createdList = document.createElement('ol');

  selectedDiv.appendChild(createdList);

  for (let i = 0; i < num; i++) {
    let participant = prompt(
        `Please write the name of participant no:${i + 1}`);
    listOfParticipants[i] = participant;
  }
  console.log(listOfParticipants);
  let sortedParticipants = listOfParticipants.sort();
  console.log(sortedParticipants);

  for (let x = 1; x <= num; x++) {

    let createdItem = document.createElement('li');
    createdList.appendChild(createdItem);
    createdItem.innerHTML = sortedParticipants[x - 1];
    selectedDiv.appendChild(createdList);

  }




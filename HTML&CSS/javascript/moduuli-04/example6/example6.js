'use strict';

/*
Develop the app further (4p).
Now add a form where you can enter a search term like in assignments 1-3
Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
Print each joke in this format:
<article>
    <p>Joke here<p>
</article>
 */

const jokeForm = document.querySelector('form');

function addToArticle(data){
  const selectedArticle = document.querySelector('article');
  try{
  for (let i=0; i< data.length; i++ ) {
    let createdElement = document.createElement('p');
    const printJoke = data[i]['value'];
    console.log(i);
    createdElement.textContent = printJoke;
    selectedArticle.appendChild(createdElement);
  }} catch (error){
    console.log(error.message);
    console.log("add to article error");
  }
  return ("jokes printed");
}



jokeForm.addEventListener('submit', async function (event) {
      let jsonData;
      event.preventDefault();
      const searchTerm = document.getElementById('query').value;
      console.log(searchTerm);
      try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`);
        jsonData = await response.json();
        addToArticle(jsonData.result);
      } catch (error) {
        console.log(error.message);
        console.log("joke not found lol");
      }
})
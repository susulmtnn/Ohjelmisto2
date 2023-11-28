'use strict'

/*
Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
No need to add a form.
*/

async function GetJoke(){
  let jokeValue;
  try{
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonjoke = await response.json();
    jokeValue = jsonjoke.value;
  }
  catch (error){
    console.log("fetch error", error);
    console.log("Ei vitsiä saatavilla")
  }
  console.log(jokeValue);
}
GetJoke();
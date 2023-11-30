'use strict'

/*
Develop the app even further. Print the following information for all series from the search result on the web page. (7p)
required information: Name, link to details (url), medium image and summary
show the name in <h2> element
show the url in <a> element. Also add target="_blank" to the link.
show the medium image with <img src="" alt="">. Add medium image to src attribute and name property to alt attribute.
some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to image property. Example: tvShow.show.image?.medium;. This is called optional chaining.
show summary in <div> element (not <p>). This is because the summary is already in <p> element, and the result will not be valid if <p> is inside another <p>.
collect the elements to <article> elements and append <article> elements to the HTML document.
make <div id="results"> element to the HTML document where you append the <article> elements.
clear the old results with innerHTML = '' before you append the new results.
 */

async function printSummary(response){
  const selectedDiv = document.querySelector("#results");
  try{
      for (let i = 0; i < response.length; i++) {
      const summary = response[i]['show']['summary'];
      const selectedArticle = document.querySelector('#child'+ i.toString());
      const createdDiv = document.createElement('div');
      createdDiv.innerHTML = summary;
      selectedArticle.appendChild(createdDiv);
  }}catch(error){
  console.log("some error");
  const selectedBody = document.querySelector('body');
  const createdDiv2 = document.createElement('div');
  createdDiv2.innerHTML = error.message;
  selectedBody.appendChild(createdDiv2);
    }
}

async function printImage(response){
  const selectedDiv = document.querySelector("#results");
  try{
      for (let i = 0; i < response.length; i++) {
      const image = response[i].show.image?.medium;
      const selectedArticle = document.querySelector('#child'+ i.toString());
      const createdImage = document.createElement('img');
      createdImage.src= image
      createdImage.alt = response[i]['show']['name'];
      selectedArticle.appendChild(createdImage);
  }}catch(error){
  console.log("some error");
  const selectedBody = document.querySelector('body');
  const createdDiv2 = document.createElement('div');
  createdDiv2.innerHTML = error.message;
  selectedBody.appendChild(createdDiv2);
    }
}

async function printURL(response) {
  const selectedDiv = document.querySelector("results");
  try {
    for (let i = 0; i < response.length; i++) {
      const url = response[i]['show']['url']
      console.log(url)
      const selectedArticle = document.querySelector('#child'+ i.toString());
      const createdAelement = document.createElement('a');
      createdAelement.textContent = url.toString() + `target="_blank"`;
      selectedArticle.appendChild(createdAelement);
    }
  }catch(error){
  console.log("some error");
  const selectedBody = document.querySelector('body');
  const createdDiv2 = document.createElement('div');
  createdDiv2.innerHTML = error.message;
  selectedBody.appendChild(createdDiv2);
  }
}



async function printName(response){
  console.log(response)
  //console.log(response[0]['show']['name'])
  const selectedDiv = document.getElementById('results');
  try {
    for (let i=0; i< response.length; i++) {
        const createdArticle = document.createElement('article');
        const name = response[i]['show']['name'];
        console.log("this is name " + name);
        createdArticle.id = "child" + i.toString();
        //createdArticle.textContent = name;
        selectedDiv.appendChild(createdArticle);
        const selectedArticle = document.querySelector('#child'+i.toString())
        const createdHeader = document.createElement("h2")
        createdHeader.textContent = name;
        selectedArticle.appendChild(createdHeader);
      }

  }
  catch{
    const selectedBody = document.querySelector('body');
    const createdDiv2 = document.createElement('div');
    createdDiv2.innerHTML = error.message;
    selectedBody.appendChild(createdDiv2);
  }
}

async function getQuery(query){
   try{
     console.log(query)
    const response= await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData);
    return (jsonData);
  } catch (error){
    console.log('Get query error', error.message);
  }
}


async function doQuery(event){
  event.preventDefault();
  const query = document.getElementById('query').value;
  //check if the results already exist or not
  let element = document.getElementById("results");
  if (element !== null){
    element.innerHTML = ""
  }
  try{
  const response= await getQuery(query);
  if (response.length===0){
     const selectedBody = document.querySelector('body');
    const createdDiv2 = document.createElement('#result');
    createdDiv2.innerHTML = "Program name not found";
    selectedBody.appendChild(createdDiv2);
  }
  console.log(response)
  console.log("success");
  const selectedBody = document.querySelector('body');
  const createdDiv = document.createElement('div');
  createdDiv.id = 'results';
  selectedBody.appendChild(createdDiv);
  const nameDone = await printName(response);
  const URLDone = await printURL(response);
  const imageDone = await printImage(response);
  const summaryDone = await printSummary(response);
  } catch (error){
  console.log("some error");
  const selectedBody = document.querySelector('body');
  const createdDiv2 = document.createElement('div');
  createdDiv2.innerHTML = error.message;
  selectedBody.appendChild(createdDiv2);
  }
}

const formForm = document.querySelector('form');
formForm.addEventListener('submit', doQuery);

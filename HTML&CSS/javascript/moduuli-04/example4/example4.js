'use strict'

/*
Develop the app even further. Optional chaining is not the best way to handle missing image. Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)
Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.
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
        let image = response[i].show.image ? response[i].show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
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
      //createdAelement.textContent= url.toString();
      const linkText = document.createTextNode("Link to the page");
      //createdAelement.innerHTML= url.toString();
      createdAelement.target = "_blank";
      createdAelement.title = "This is the link";
      createdAelement.href = url.toString();
      selectedArticle.appendChild(createdAelement);
      createdAelement.appendChild(linkText);
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

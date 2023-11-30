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

async function printName(response){
  console.log(response)
  console.log(response[0]['show']['name'])
  const selectedDiv = document.getElementById('results');
  try {
    for (let i=0; i<= response.length; i++) {
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
    console.log("error in name")
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
  try{
  const response= await getQuery(query);
  console.log(response)
  console.log("success");
  const selectedBody = document.querySelector('body');
  const createdDiv = document.createElement('div');
  createdDiv.id = 'results';
  selectedBody.appendChild(createdDiv);
  const nameDone = await printName(response);
  } catch (error){
    console.log("some error");
  }
}

const formForm = document.querySelector('form');
formForm.addEventListener('submit', doQuery);

'use strict'

async function getQuery(query) {
  try{
    const response = await fetch('https://api.tvmaze.com/search/shows' + query);
    const json = await response.json();
    console.log(json.result);
    return json;
  }
  catch (error){
    console.error("Get query fetch error");
  }
}

async function doQuery(event)
    {
      const selectedElem = document.querySelector('form').value;
      const result = await getQuery(selectedElem)
      console.log(selectedElem);
      if (result.result){
        console.log(selectedElem);
      }
      else{
        console.log("fail" + result.result)
      }
    }

document.querySelector('form').addEventListener('submit', doQuery);
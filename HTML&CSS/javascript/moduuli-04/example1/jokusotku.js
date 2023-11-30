'use strict'


async function getQuery(query) {
  try{
    const response1 = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonresponse = await response1.json();
    console.log(jsonresponse.result)
    return jsonresponse;
  }
  catch (error){
    console.error("Get query fetch error");
  }
}

async function doQuery(event)
    {

      const nameInput = document.getElementById('query');
      const result = await getQuery(nameInput)
      if (result.result){
        console.log(result.result);
      }
      else{
        console.log("fail" + result.result)
      }
    }
//document.querySelector('form').addEventListener('submit', doQuery);*/


const QueryInput = document.getElementById('query');
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = QueryInput.value;
    console.log(QueryInput.value);
    doQuery(query);
}

  /* fetch(`https://api.tvmaze.com/search/shows?q=${nameInput.value}`).then((response) =>{
     return response.json();
   }).then((jsondata) => {
      console.log(jsondata);
    }*/



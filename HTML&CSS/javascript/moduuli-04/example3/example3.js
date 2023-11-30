'use strict'
async function getQuery(query){
   try{
    const response= await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    //console.log(jsonData);
    return(jsonData)
  } catch (error){
    console.log('Get query error', error.message);
  }
}


async function doQuery(event){
  event.preventDefault();
  const query = document.getElementById('query').value;
    const response= await getQuery(query);
    if (response){
      console.log(response);
      console.log("success");
  } else{
    console.log("some error");
  }
}

const formForm = document.querySelector('form');
formForm.addEventListener('submit', doQuery);

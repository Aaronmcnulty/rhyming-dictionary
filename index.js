import { RhymeResultsTemplate } from "./templates/rhymeResults.js";
import { capitaliseFirst } from "./modules/capitalise.js";
import { rhymeSearchForm } from "./functions/rhymeSearchForm/rhymeSearchForm.js"


//Runs function so search form is ready for use on render.
rhymeSearchForm()

//empty array to be added to sessionStorage for use in the 'selectedWordList' function.
let savedWordArray = [];
sessionStorage.setItem("savedWordArray", JSON.stringify(savedWordArray));

let rhymeSearchResults = "";

// Fetch the rhyming words from the api.
export async function fetchRhymeData(searchTerm) {
  //Append the url with the user entered search term.
  const url = `https://api.datamuse.com/words?sl=${searchTerm}`;
  try {
    const response = await fetch(url);
    //If reponse is not ok, throw error with the status.
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    //If successful assign the response json to 'rhymeSearchResults.
    const data = await response.json();
    rhymeSearchResults = data;
  } catch (error) {
    console.error(error.message);
  }
  
  /*
    Passes the 'rhymeSearchResults' JSON and the original search term to the RhymeResultsTemplate
    function to be displayed in browser.
    'searhTerm' is passed to 'capitaliseFirst'function which returns the string with the first 
    letter capitalised.
  */
  RhymeResultsTemplate(capitaliseFirst(searchTerm), rhymeSearchResults);
}

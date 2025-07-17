import { RhymeResultsTemplate } from "./templates/rhymeResults.js";
import { capitaliseFirst } from "./modules/capitalise.js";
import { rhymeSearchForm } from "./functions/rhymeSearchForm/rhymeSearchForm.js"

let savedWordArray = [];

sessionStorage.setItem("savedWordArray", JSON.stringify(savedWordArray));

rhymeSearchForm()

let rhymeSearchResults = "";

export async function getData(searchTerm) {
  const url = `https://api.datamuse.com/words?sl=${searchTerm}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    rhymeSearchResults = data;
  } catch (error) {
    console.error(error.message);
  }
  RhymeResultsTemplate(capitaliseFirst(searchTerm), rhymeSearchResults);
}

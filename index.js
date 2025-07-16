import { RhymeResultsTemplate } from "./templates/rhymeResults.js";
import { capitaliseFirst } from "./modules/capitalise.js";

let savedWordArray = [];

sessionStorage.setItem("savedWordArray", JSON.stringify(savedWordArray));

const rhymeSearchForm = document.getElementById("rhymeSearchForm");
const rhymeInput = document.getElementById("rhymeInput");

rhymeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (typeof rhymeInput.value != "string") {
    alert("Words only, if you want to rhyme a number please spell it out");
    return;
  }
  const searchTerm = rhymeInput.value.toLowerCase();

  getData(searchTerm);
});

let rhymeSearchResults = "";

async function getData(searchTerm) {
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

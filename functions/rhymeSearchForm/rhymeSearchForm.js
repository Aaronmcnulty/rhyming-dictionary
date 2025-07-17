import { fetchRhymeData } from "../../index.js"

export function rhymeSearchForm(){

const rhymeSearchForm = document.getElementById("rhymeSearchForm");
const rhymeInput = document.getElementById("rhymeInput");

//Add event listener for form submission.
rhymeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //If rhymeInput value is not a string, an alert is triggered explaining that only strings can be used. 
  if (typeof rhymeInput.value != "string") {
    alert("Words only, if you want to rhyme a number please spell it out");
    return;
  }
  //Lowercases value for use in the API url
  const searchTerm = rhymeInput.value.toLowerCase();

  //Calls the fetch API function and passes in the searchterm to be used.
  fetchRhymeData(searchTerm);
});
}
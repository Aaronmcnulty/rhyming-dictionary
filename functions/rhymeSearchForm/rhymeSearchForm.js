import { fetchRhymeData } from "../../index.js"

export function rhymeSearchForm(){

const rhymeSearchForm = document.getElementById("rhymeSearchForm");
const rhymeInput = document.getElementById("rhymeInput");

//Add event listener for form submission.
rhymeSearchForm.addEventListener("submit", (event) => {
  
  //Lowercases value for use in the API url
  const searchTerm = rhymeInput.value.toLowerCase();

  event.preventDefault();
  //If rhymeInput value is not a string, an alert is triggered explaining that only strings can be used. 
  if (!isNaN(searchTerm)) {
    alert("If you want to rhyme a number please write it as a word");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(searchTerm)) {
    alert("You've used special characters, please use letters only")
  }

  //Calls the fetch API function and passes in the searchterm to be used.
  fetchRhymeData(searchTerm);
});
}
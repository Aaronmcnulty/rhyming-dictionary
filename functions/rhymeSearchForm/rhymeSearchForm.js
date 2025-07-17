import { getData } from "../../index.js"

export function rhymeSearchForm(){

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
}
import { RhymeResultsTemplate } from "./templates/rhymeResults.js";
import { capitaliseFirst } from "./modules/capitalise.js";

let rhymeSearchResults = "";

let savedWordArray = []

sessionStorage.setItem('savedWordArray', JSON.stringify(savedWordArray))

const rhymeSearchForm = document.getElementById("rhymeSearchForm");
const rhymeInput = document.getElementById("rhymeInput");


rhymeSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();

  if(rhymeInput.value != String){
    alert('Words only, if you want to rhyme a number please spell it out')
    return;
  }
  const searchTerm = rhymeInput.value.toLowerCase();
  getRhymes(searchTerm);
  RhymeResultsTemplate(capitaliseFirst(searchTerm), rhymeSearchResults);
});


function getRhymes(searchTerm) {
  $(".loader").show()
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/rhyme?word=" + searchTerm,
    headers: { "X-Api-Key": "3dYIM/3ev5hDsGN4zhTxcA==Knebrp8phCOTeh2h" },
    contentType: "application/json",
    async: false,
    success: function (result) {
      rhymeSearchResults = result;
    },
    error: function ajaxError(jqXHR) {
      console.log(jqXHR)
      console.error("Error: ", jqXHR.responseText);
    },
    complete: function(){
        $(".loader").hide();
      }
  })
}


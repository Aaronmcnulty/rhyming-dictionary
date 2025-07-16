import { RhymeResultsTemplate } from "./templates/rhymeResults.js";
import { capitaliseFirst } from "./modules/capitalise.js";

let ressies = "";

const rhymeSearchForm = document.getElementById("rhymeSearchForm");
const rhymeInput = document.getElementById("rhymeInput");

rhymeSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = rhymeInput.value.toLowerCase();
  console.log(searchTerm);
  getRhymes(searchTerm);
  RhymeResultsTemplate(capitaliseFirst(searchTerm), ressies);
});

function getRhymes(searchTerm) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/rhyme?word=" + searchTerm,
    headers: { "X-Api-Key": "3dYIM/3ev5hDsGN4zhTxcA==Knebrp8phCOTeh2h" },
    contentType: "application/json",
    async: false,
    success: function (result) {
      ressies = result;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}


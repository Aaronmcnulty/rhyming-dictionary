import  { RhymeResultsTemplate } from "./templates/rhymeResults.js"
import { capitaliseFirst } from "./modules/capitalise.js"

const wordsList = ['frog', 'dog', 'fog', 'slog', 'hog', 'sog', 'bog']

const rhymeSearchButton = document.getElementById('rhymeSearchButton')
const rhymeInput = document.getElementById('rhymeInput')

 rhymeSearchButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(rhymeInput.value)
    RhymeResultsTemplate(capitaliseFirst(rhymeInput.value), wordsList)
})




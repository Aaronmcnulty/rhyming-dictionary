import  { RhymeResultsTemplate } from "./templates/rhymeResults.js"

const rhymeSearchButton = document.getElementById('rhymeSearchButton')
const rhymeInput = document.getElementById('rhymeInput')

const formSubmit = rhymeSearchButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(rhymeInput.value)
    RhymeResultsTemplate(rhymeInput.value)
})


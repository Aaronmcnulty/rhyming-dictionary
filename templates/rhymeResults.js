import { capitaliseFirst } from "../modules/capitalise.js"

export function RhymeResultsTemplate(searchWord, resultsData) {
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
    rhymeResultsContainer.innerText = ''

    const resultsTitle = document.createElement('h3')
    resultsTitle.innerText = (`${searchWord}, rhymes with...`)

    const wordResultsList = document.createElement('ul')

    resultsData.map(item => {
        const listItem = document.createElement('li')
        listItem.innerText = capitaliseFirst(item)
        wordResultsList.append(listItem)
   })
   
    rhymeResultsContainer.append(resultsTitle)
    rhymeResultsContainer.append(wordResultsList)
}


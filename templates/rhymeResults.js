import selectedWordList from "./selectedWordList.js"
import { capitaliseFirst } from "../modules/capitalise.js"


export function RhymeResultsTemplate(searchWord, resultsData) {
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
    rhymeResultsContainer.innerText = ''

    const resultsTitle = document.createElement('h3')
    resultsTitle.innerText = (`${searchWord}, rhymes with...`)

    const wordResultsList = document.createElement('ul')

    let savedWordArray = []
    resultsData.map(item => {
        const listItem = document.createElement('li')
        listItem.innerText = capitaliseFirst(item)
        const addWordButton = document.createElement('button')
        addWordButton.id = 'addWordButton'
        addWordButton.textContent = '+'
        addWordButton.value = item
        wordResultsList.append(listItem)
        wordResultsList.append(addWordButton)
        
        addWordButton.addEventListener('click', function() {
            savedWordArray.push(addWordButton.value)
            console.log(savedWordArray)
            selectedWordList(savedWordArray)
        })
   })
    rhymeResultsContainer.append(resultsTitle)
    rhymeResultsContainer.append(wordResultsList)
}


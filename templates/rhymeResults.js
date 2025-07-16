import selectedWordList from "./selectedWordList.js"
import { capitaliseFirst } from "../modules/capitalise.js"


export function RhymeResultsTemplate(searchWord, rhymeResultsArray) {
    console.log(rhymeResultsArray)
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
    rhymeResultsContainer.innerText = ''

    const resultsTitle = document.createElement('h3')
    resultsTitle.innerText = (`${searchWord}, rhymes with...`)

    const wordResultsList = document.createElement('ul')


    rhymeResultsArray.map(item => {
        const listItem = document.createElement('li')
        listItem.innerText = capitaliseFirst(item.word)
        const addWordButton = document.createElement('button')
        addWordButton.id = 'addWordButton'
        addWordButton.textContent = '+'
        addWordButton.value = item.word
        wordResultsList.append(listItem)
        wordResultsList.append(addWordButton)
        
        addWordButton.addEventListener('click', function() {
            let savedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))
            savedWordArray.push(addWordButton.value)

            sessionStorage.setItem('savedWordArray', JSON.stringify(savedWordArray))
            
            selectedWordList()
        })
   })
    rhymeResultsContainer.append(resultsTitle)
    rhymeResultsContainer.append(wordResultsList)
}


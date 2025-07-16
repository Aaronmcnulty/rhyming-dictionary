import selectedWordList from "./selectedWordList.js"
import { capitaliseFirst } from "../modules/capitalise.js"


export function RhymeResultsTemplate(searchWord, rhymeResultsArray) {
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
    rhymeResultsContainer.innerText = ''

    const resultsTitle = document.createElement('h3')
    resultsTitle.innerText = (`${searchWord} rhymes with...`)

    const wordResultsList = document.createElement('ul')


    rhymeResultsArray.map(item => {
        
        const rhymeListItem = document.createElement('li')
        rhymeListItem.class = 'rhyme-results-entry'

        const rhymeListWord = document.createElement('p')
        rhymeListWord.class = 'rhyme-entry-title'
        rhymeListWord.innerText = (capitaliseFirst(item.word))

        const rhymeListScore = document.createElement('p')
        rhymeListScore.class = 'rhyme-entry-score'
        rhymeListScore.innerText = (`Rhyme score: ${item.score}`)
       
        const saveRhymeButton = document.createElement('button')
        saveRhymeButton.id = 'addWordButton'
        saveRhymeButton.class = 'add-button'
        saveRhymeButton.textContent = '+'
        saveRhymeButton.value = item.word

        rhymeListItem.append(rhymeListWord)
        rhymeListItem.append(rhymeListScore)
        rhymeListItem.append(saveRhymeButton)

        wordResultsList.append(rhymeListItem)
        
        saveRhymeButton.addEventListener('click', function() {
            
            let savedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))
            savedWordArray.push(saveRhymeButton.value)
            sessionStorage.setItem('savedWordArray', JSON.stringify(savedWordArray))
            
            selectedWordList()
        })
   })
    rhymeResultsContainer.append(resultsTitle)
    rhymeResultsContainer.append(wordResultsList)
}


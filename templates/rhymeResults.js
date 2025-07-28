import selectedWordList from "./selectedWordList.js"
import { capitaliseFirst } from "../modules/capitalise.js"


export function RhymeResultsTemplate(searchWord, rhymeResultsArray) {
    
    //Template creates the elements to display the passed in 'searchWord' and 'rhymesResultsArray'.
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
    rhymeResultsContainer.innerText = ''

    //Create title and insert the 'searchWord' argument into the string.
    const resultsTitle = document.createElement('h3')
    resultsTitle.className = 'results-title'
    resultsTitle.innerText = (`${searchWord} rhymes with...`)

    const rhymeResultsList = document.createElement('ul')
    rhymeResultsList.className = 'results-list'
    /*
    Map through the results array and pass each entry to the 'createRhymeResultEntry' as well as the rhymeResultsList
    so it can be appended.
    */
    rhymeResultsArray.map(rhymeEntryData => {
        createRhymeResultEntry(rhymeEntryData, rhymeResultsList)
   })

    //Appends the container with the title and results list elements.
    rhymeResultsContainer.append(resultsTitle)
    rhymeResultsContainer.append(rhymeResultsList)
}


//Function creates a list entry for each passed in argument and then appends it to the rhymeResultList.
function createRhymeResultEntry(rhymeEntryData, rhymeResultsList){

        const rhymeListItem = document.createElement('li')
        rhymeListItem.className = 'rhyme-results-entry'

        //Creates title element for the list entry.
        const rhymeListWord = document.createElement('p')
        rhymeListWord.className = 'rhyme-entry-title'
        //Capitalises the first letter of the word before its inserted into innerText.
        rhymeListWord.innerText = (capitaliseFirst(rhymeEntryData.word))

        //Creates 'rhyme score' element for the list entry.
        const rhymeListScore = document.createElement('p')
        rhymeListScore.className = 'rhyme-entry-score'
        rhymeListScore.innerText = (`Rhyme score: ${rhymeEntryData.score}`)
       
        //Creates button so users can add the word to the selected words list.
        const saveRhymeButton = document.createElement('button')
        saveRhymeButton.id = 'addWordButton'
        saveRhymeButton.className = 'save-word-button'
        saveRhymeButton.textContent = '+'
        saveRhymeButton.value = rhymeEntryData.word

        //appends the created elements to the rhymeListItem. 
        rhymeListItem.append(rhymeListWord)
        rhymeListItem.append(rhymeListScore)
        rhymeListItem.append(saveRhymeButton)

        //Appends the rhymeListItem element to the rhymeResultsList element. 
        rhymeResultsList.append(rhymeListItem)
        
        //Adds event listener to the saveRhymeButton.
        saveRhymeButton.addEventListener('click', function() {
            //Calls function to add the clicked buttons value to the savedWordArray in sessionStorage. 
            addToSavedWordsList(saveRhymeButton.value)
            //Calls function to rerender the selectedWordList with the newly added word.
            selectedWordList()
        })
}


function addToSavedWordsList(rhymeString){
            //Pardes savedWordArray from JSON and stores the array as 'parsedSavedWordArray'.
            let parsedSavedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))
            //Push passed in argument to the 'parsedSavedWordArray'.
            parsedSavedWordArray.push(rhymeString)
            /*
            'parsedSavedWordArray' is converted to JSON using JSON.stringify. 
            Overwrites 'savedWordArray' in sessionStorage with 'parsedSavedWordArray'.
            */
            sessionStorage.setItem('savedWordArray', JSON.stringify(parsedSavedWordArray))
}
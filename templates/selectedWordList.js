
export default function selectedWordList(){

    //Retrieves savedWordArray from sessionStorage and parses from JSON.
    const savedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))

    //Assigns container element to variable. 
    const selectedWordsContainer = document.getElementById('selectedWordsContainer')
    //Resets containers contents on each render.
    selectedWordsContainer.textContent = ''

    //Create title element and append to the parent container.
    const savedWordsTitle = document.createElement('h3')
    savedWordsTitle.innerText = "Your Selected Rhymes"
    savedWordsTitle.className = "saved-words-title"
    selectedWordsContainer.append(savedWordsTitle)

    //created selectedWords container. 
    const selectedWords = document.createElement('ul')
    selectedWords.className = "selected-words-list"
    //Map each entry from the savedWordArray and pass it to the createWordListEntry function.
    savedWordArray.map(savedWord => {
       createWordListEntry(savedWord)
    })


    function createWordListEntry(savedWord){
    //Creates list entry element from the passed in 'savedWord' string.
            const wordListEntry = document.createElement('li')
            wordListEntry.className = 'saved-word-entry'

            const wordListText = document.createElement('p')
            wordListText.textContent = savedWord
            wordListText.className = 'saved-word-text'

    //Creates the removeEntryButton and sets the saved word string as it's value.
            const removeEntryButton = document.createElement('button')
            removeEntryButton.textContent = 'X'
            removeEntryButton.className = 'removeEntryButton'
            removeEntryButton.value = savedWord

    //Adds event listener which calls the removeWordFromArray function when clicked.. 
            removeEntryButton.addEventListener('click', function(event){
                removeWordFromArray(event.target.value)
            })

    //Appends created elements to their respective parent elements.
            wordListEntry.append(wordListText)
            wordListEntry.append(removeEntryButton)
            selectedWords.append(wordListEntry)
            selectedWordsContainer.append(selectedWords)
            
        }
        
//Filters the targetWord from the array and passes this filteredArray to the 'setSavedWordArray' function.
    function removeWordFromArray(targetWord){
        const filteredArray = savedWordArray.filter(word => {
            if(word !== targetWord){
                return word
            }
        })
        setSavedWordArray(filteredArray)
    }

//Overwrites the 'savedWordArray' in session storage with the passed in 'updatedArray'.
    function setSavedWordArray(updatedArray){
        sessionStorage.setItem('savedWordArray', JSON.stringify(updatedArray))
        selectedWordList()
    }
   
}
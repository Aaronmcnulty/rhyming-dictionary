
export default function selectedWordList(){
    const savedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))

    const selectedWordsContainer = document.getElementById('selectedWordsContainer')
    selectedWordsContainer.textContent = ''

    const savedWordsTitle = document.createElement('h3')
    
    savedWordsTitle.innerText = "Your Selected Rhymes"

    selectedWordsContainer.append(savedWordsTitle)


    
        const selectedWords = document.createElement('div')
        selectedWords.textContent = ''
        savedWordArray.map(item => {
            const wordListEntry = document.createElement('li')
            wordListEntry.id = 'wordListEntry'
            wordListEntry.textContent = item

            const removeEntryButton = document.createElement('button')
            removeEntryButton.textContent = 'remove'
            removeEntryButton.className = 'removeEntryButton'
            removeEntryButton.value = item

            removeEntryButton.addEventListener('click', function(event){
              const filteredArray = savedWordArray.filter(word => {
                    if(word !== removeEntryButton.value){
                        return word
                    }
                })
                sessionStorage.setItem('savedWordArray', JSON.stringify(filteredArray))
                console.log(savedWordArray)
                selectedWordList()
            })
            selectedWordsContainer.append(selectedWords)
            selectedWords.append(wordListEntry)
            wordListEntry.append(removeEntryButton)
        })
    }

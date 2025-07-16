
export default function selectedWordList(){

    const savedWordArray = JSON.parse(sessionStorage.getItem('savedWordArray'))
    console.log(savedWordArray)
    const selectedWordsContainer = document.getElementById('selectedWordsContainer')
    selectedWordsContainer.textContent = ''
    
    if(savedWordArray){
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

            selectedWordsContainer.append(wordListEntry)
            wordListEntry.append(removeEntryButton)
        })
    }

}

export default function selectedWordList(selectedWordArray){

    const selectedWordsContainer = document.getElementById('selectedWordsContainer')
    selectedWordsContainer.textContent = ''
    selectedWordArray.map(item => {
        const wordListEntry = document.createElement('li')
        wordListEntry.textContent = item
        selectedWordsContainer.append(wordListEntry)
    })

}
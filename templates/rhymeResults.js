

export function RhymeResultsTemplate(searchWord, resultsData) {
    const rhymeResultsContainer = document.getElementById('rhymeResultsContainer')
   

    const resultsTitle = document.createElement('h3')
    resultsTitle.innerText = (`${searchWord}, rhymes with...`)

    rhymeResultsContainer.append(resultsTitle)
}


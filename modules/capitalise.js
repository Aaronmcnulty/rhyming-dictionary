

//Capitalises the first letter in the string, converts the rest to lowercase and then returns it as a string.
export function capitaliseFirst(word){
    return word.charAt(0).toUpperCase() + String(word).slice(1).toLowerCase()
}


//Toggles the display of the input element depending on its current display value.
export function elementDisplayToggle(elementToToggle){
  if(elementToToggle.style.display == 'flex'){
    elementToToggle.style.display = 'none'
  } else {
    elementToToggle.style.display = 'flex'
  }
}
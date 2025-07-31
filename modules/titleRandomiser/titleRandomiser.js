import { getRandomInt } from "../getRandomInt/getRandomInt.js"

export const titleRhymesArray = ['LIME', 'CRIME', 'SIGN', 'DEVINE', 'INCLINE', 'BRINE', 'SHINE', 'CLIMB', 'FINE', 'DINE', 'SINE', 'MIME']

export function titleRandomiser(){
  const randomNumber = getRandomInt(titleRhymesArray.length)
  return `RHYME ${titleRhymesArray[randomNumber]}`
}


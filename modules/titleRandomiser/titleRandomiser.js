import { getRandomInt } from "../getRandomInt/getRandomInt.js"

const rhymeArray = ['LIME', 'CRIME', 'SIGN', 'DEVINE', 'INCLINE', 'BRINE', 'SHINE', 'CLIMB', 'FINE', 'DINE', 'SINE', 'MIME']

export function titleRandomiser(pageTitle){
  const randomNumber = getRandomInt(rhymeArray.length)
  pageTitle.innerText = `RHYME ${rhymeArray[randomNumber]}`
}


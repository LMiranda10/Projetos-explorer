import { playButton, pauseButton } from "./main.js"

   
export function pressPlaybutton() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
}

export function pressPausebutton() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

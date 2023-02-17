import { pressPlaybutton, pressPausebutton } from './controls.js'
import { updateTimerDisplay, resetTimer, countTimer, timerTimeOut } from './timer.js'
import { pressForest ,pressRain, pressBonfire, pressCoffeeshop } from './sounds.js'

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const moreButton = document.querySelector('.more')
const lessButton = document.querySelector('.less')

const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const coffeeShopButton = document.querySelector('.coffeeshop')
const bonfireButton = document.querySelector('.bonfire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes 
let seconds = Number(secondsDisplay.textContent)

//controls

minutesDisplay.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?') || 0
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
})

playButton.addEventListener('click', function() {
    pressPlaybutton()
    countTimer()
});

pauseButton.addEventListener('click', function() {
    pressPausebutton()
    clearTimeout(timerTimeOut)
})

stopButton.addEventListener('click', function() {
    pressPausebutton()
    resetTimer()
})

moreButton.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(String(minutes + 5), seconds)
})

lessButton.addEventListener('click', function() {
    let minutes = Number(minutesDisplay.textContent)

    if(minutes > 0) {
        updateTimerDisplay(String(minutes - 1), seconds)
    } 
})

//SOUNDS

forestButton.addEventListener('click', function() {
    pressForest()
})

rainButton.addEventListener('click', function() {
    pressRain()
})

coffeeShopButton.addEventListener('click', function() {
    pressCoffeeshop()
})

bonfireButton.addEventListener('click', function() {
    pressBonfire()
})

export {
    minutesDisplay, 
    secondsDisplay, 
    pauseButton,
    playButton,
    minutes
}
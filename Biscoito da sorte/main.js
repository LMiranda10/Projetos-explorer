const clickCookie = document.querySelector('.clickCookie')
const screenOne = document.querySelector('.box1')
const screenTwo = document.querySelector('.box2')
const button = document.querySelector('button')

clickCookie.addEventListener('click', changeScreen)
button.addEventListener('click', changeScreen)

function changeScreen(e) {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}
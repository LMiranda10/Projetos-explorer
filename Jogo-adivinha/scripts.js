//Variáveis
let randomNumber = Math.round(Math.random() * 10);
const screenOne = document.querySelector(".box1");
const screenTwo = document.querySelector(".box2");
const screenTwoP =  document.querySelector(".box2 p");
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const inputNumber = document.querySelector("#inputNumber")
let xAttemp = 1;
console.log(randomNumber)

//eventos
btnTry.addEventListener('click', handleBtnTry)
btnReset.addEventListener('click', handleBtnReset)
document.addEventListener('keydown', enterKey);


//Funções call back
function handleBtnTry(event){
    event.preventDefault()


    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen();

        screenTwoP.innerText = `Acertou em ${xAttemp} tentativas`
            
         xAttemp = 0;
    }
    
        inputNumber.value = '';
        xAttemp++;
}

function handleBtnReset() {
    toggleScreen();
    xAttemp = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screenTwo.classList.toggle("hide")
    screenOne.classList.toggle("hide")
}

function enterKey(e){
    if(e.key == 'Enter' && screenOne.classList.contains('hide')){
        handleBtnReset();
    };
}
let number1;
let number2;

number1 = prompt(`Digite o numero 1: `)
number2 = prompt(`Digite o numero 2: `)

alert(`A soma entre ${number1} e ${number2} é igual à ${Number(number1)+Number(number2)}`)
alert(`A subtração entre ${number1} e ${number2} é igual à ${Number(number1)-Number(number2)}`)
alert(`A divisão entre ${number1} e ${number2} é igual à ${ ((Number(number1)+Number(number2))/ 2) }`)
alert(`A multiplicação entre ${number1} e ${number2} é igual à ${Number(number1) * Number(number2)}`)
alert(`A resto da divisão entre ${number1} e ${number2} é igual à ${Number(number1) % Number(number2)}`)

let sum = Number(number1)+Number(number2)
let sub = Number(number1)-Number(number2)
let div = (Number(number1)+Number(number2)/ 2)
let mult = Number(number1) * Number(number2)
let rest = Number(number1) % Number(number2)

if(sum % 2 == 0) {
    console.log('Este numero é par')
} else {
    console.log(`Este nuumero é impar`)
}

if(sub % 2 == 0) {
    console.log('Este numero é par')
} else {
    console.log(`Este nuumero é impar`)
}

if(div % 2 == 0) {
    console.log('Este numero é par')
} else {
    console.log(`Este nuumero é impar`)
}

if(mult % 2 == 0) {
    console.log('Este numero é par')
} else {
    console.log(`Este nuumero é impar`)
}

if(rest % 2 == 0) {
    console.log('Este numero é par')
} else {
    console.log(`Este nuumero é impar`)
}
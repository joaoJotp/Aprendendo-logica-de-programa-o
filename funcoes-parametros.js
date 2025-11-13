const btnSoma = document.querySelector("#somar")
const btnSubtracao = document.querySelector("#subtracao")
const btnMultiplicacao = document.querySelector("#multiplicacao")
const btnDivisao = document.querySelector("#dividir")
const inputPrimeiroValor = document.querySelector("#primeiroNumero")
const inputSegundoValor = document.querySelector("#segundoNumero")
const divRes = document.querySelector(".res")

function somar(){
    let resultado = Number(inputPrimeiroValor.value)+ Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
function subtracao(){
    let resultado = Number(inputPrimeiroValor.value)- Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
function multiplicacao(){
    let resultado = Number(inputPrimeiroValor.value)* Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
function divisao(){
    let resultado = Number(inputPrimeiroValor.value)/ Number(inputSegundoValor.value)
    divRes.innerText = resultado
}

btnSoma.addEventListener(`click`, somar)
btnSubtracao.addEventListener(`click`, subtracao)
btnMultiplicacao.addEventListener(`click`, multiplicacao)
btnDivisao.addEventListener(`click`, divisao)













/*
const btnSomar = document.querySelector("#btnSomar")
const btnDivisao = document.querySelector("#btnDivisao")
const btnMultiplicacao = document.querySelector("#btnMultiplicacao")
const btnSubtracao = document.querySelector("#btnSubtracao")


function somar (){
    let a = Number(prompt("Digite um numero"))
    let b = Number(prompt("Digite um numero"))
    alert(a+b)
}
function divisao (){
    let a = Number(prompt("Digite um numero"))
    let b = Number(prompt("Digite um numero"))
    alert(a/b)
}
function multiplicacao (){
    let a = Number(prompt("Digite um numero"))
    let b = Number(prompt("Digite um numero"))
    alert(a*b)
}
function subtracao (){
    let a = Number(prompt("Digite um numero"))
    let b = Number(prompt("Digite um numero"))
    alert(a-b)
}


btnSomar.addEventListener("click", somar)
btnDivisao.addEventListener("click", divisao)
btnMultiplicacao.addEventListener("click", multiplicacao)
btnSubtracao.addEventListener("click", subtracao)



console.log(soma(5 , 3))
console.log(soma(1 , 8))
console.log(soma(5 , 15))
console.log(soma(10 , 14))
*/ 
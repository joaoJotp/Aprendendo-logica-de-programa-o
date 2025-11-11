const botao = document.querySelector("#btn")
function chamaFuncao() {
    alert("ola")
    segundaFuncao()
}

function segundaFuncao() {
    alert("Segunda função chamada")
    terceiraFuncao()
}
function terceiraFuncao(){
    alert("Terceira função chamada")
quartaFuncao()
}
function quartaFuncao(){
    alert("Quarta função chamada")
quintaFuncao()

}
function quintaFuncao(){
    alert("Quinta função chamada")
chamaFuncao()

}

botao.addEventListener(`click`, chamaFuncao )
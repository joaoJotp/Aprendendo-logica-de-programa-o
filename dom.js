const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")


function trocaTexto(){
    titulo.innerText = "Joao"
}

botao.addEventListener("click", trocaTexto)
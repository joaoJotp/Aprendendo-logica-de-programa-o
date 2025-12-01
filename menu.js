let opcao;
opcao = Number(prompt(

    `ESCOLHA UMA OPÇAO
    ====================
    
    [1] Salgado
    [2]Bebidas
    [3]Lanches
    [4]Sobremesa
    [5]Sair`
))

function salgados() {
    alert("Salgado")
    let sacolaSalgado = Number(prompt(`
    Qual salgado vc deseja comprar?
    ================================

    [1] Coxinha de Frango $5
    [2] Bolinha de Queijo $5
    [3] Kibi $5
    [4] Enroladinho de salsicha $5
    ================================   
    
         `))
    switch (sacolaSalgado) {
        case 1:
            let unidadeCoxinha = Number(prompt("Quantas unidades de coxinha de Frango você deseja"))
            let totalCompraCoxinha = unidadeCoxinha * 5
            alert(`${unidadeCoxinha} Und  Total=${totalCompraCoxinha}`)
            break;
        case 2:
            let unidadeBolinha = Number(prompt("Quantas unidades de Bolinha de queijo você deseja"))
            let totalCompraBolinha = unidadeBolinha * 5
            alert(`${unidadeBolinha} Und  Total=${totalCompraBolinha}`)
            break;
        case 3:
            let unidadeKibi = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraKibi = unidadeKibi * 5
            alert(`${unidadeKibi} Und  Total=${totalCompraKibi}`)
            break;
        case 4:
            let unidadeEnrolado = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraEnrolado = unidadeEnrolado * 5
            alert(`${unidadeEnrolado} Und  Total=${totalCompraEnrolado}`)


        default:
            alert("Não existe essa opçao")
            break;
    }
}

function bebidas() {
    let sacolaBebida = Number(prompt(`
            
    ================================
          [1] Agua
          [2] Refrigerante
          [3] Guaraviton
          [4] Gatorade
    ================================
            `))
    switch (sacolaBebida) {
        case 1:
            let unidadeAgua = Number(prompt("Quantas unidades de coxinha de Frango você deseja"))
            let totalCompraAgua = unidadeAgua * 5
            alert(`${unidadeAgua} Und  Total=${totalCompraAgua}`)
            break;
        case 2:
            let unidadeRefrigerante = Number(prompt("Quantas unidades de Bolinha de queijo você deseja"))
            let totalCompraRefrigerante = unidadeRefrigerante * 5
            alert(`${unidadeRefrigerante} Und  Total=${totalCompraRefrigerante}`)
            break;
        case 3:
            let unidadeGuaraviton = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraGuaraviton = unidadeGuaraviton * 5
            alert(`${unidadeGuaraviton} Und  Total=${totalCompraGuaraviton}`)
            break;
        case 4:
            let unidadeGatorade = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraEnrolado = unidadeGatorade * 5
            alert(`${unidadeGatorade} Und  Total=${totalCompraGatorade}`)


        default:
            alert("Não existe essa opçao")
            break;
    }


}
function lanches() {
    alert("Lanches")
    let sacolaLanches = Number(prompt(`
    ================================
          [1] X - Ratao
          [2] X - Egg
          [3] X - Bacon
          [4] X - Chicken 
    ================================
            `))
    function lanches() {

    }
    switch (sacolaLanches) {
        case 1:
            let unidadeRatao = Number(prompt("Quantas unidades de coxinha de Frango você deseja"))
            let totalCompraRatao = unidadeRatao * 5
            alert(`${unidadeRatao} Und  Total=${totalCompraRatao}`)
            break;
        case 2:
            let unidadeEgg = Number(prompt("Quantas unidades de Bolinha de queijo você deseja"))
            let totalCompraEgg = unidadeEgg * 5
            alert(`${unidadeEgg} Und  Total=${totalCompraEgg}`)
            break;
        case 3:
            let unidadeBacon = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraBacon = unidadeBacon * 5
            alert(`${unidadeBacon} Und  Total=${totalCompraBacon}`)
            break;
        case 4:
            let unidadeChicken = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraChicken = unidadeChicken * 5
            alert(`${unidadeChicken} Und  Total=${totalCompraChicken}`)


        default:
            alert("Não existe essa opçao")
            break;
    }
}
function sobremesa() {
    alert("Sobremesa")
    let sacolaSobremesa = Number(prompt(`
    ================================
           [1] Petit Geteau
           [2] Torta de Morango
           [3] Torta de Limao
           [4] Banana Split
    ================================
            `))
    switch (sacolaSobremesa) {
        case 1:
            let unidadePetit = Number(prompt("Quantas unidades de coxinha de Frango você deseja"))
            let totalCompraPetit = unidadePetit * 5
            alert(`${unidadePetit} Und  Total=${totalCompraPetit}`)
            break;
        case 2:
            let unidadeMorango = Number(prompt("Quantas unidades de Bolinha de queijo você deseja"))
            let totalCompraMorango = unidadeMorango * 5
            alert(`${unidadeMorango} Und  Total=${totalCompraMorango}`)
            break;
        case 3:
            let unidadeLimao = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraLimao = unidadeLimao * 5
            alert(`${unidadeBacon} Und  Total=${totalCompraBacon}`)
            break;
        case 4:
            let unidadeBanana = Number(prompt("Quantas unidades de Kibi você deseja"))
            let totalCompraBanana = unidadeBanana * 5
            alert(`${unidadeBanana} Und  Total=${totalCompraBanana}`)


        default:
            alert("Não existe essa opçao")
            break;
    }
}
switch (opcao) {
    case 1:
        salgados()
        break;
    case 2:
        bebidas()
        break;
    case 3:
        lanches()
        break;
    case 4:
        sobremesa()

        break;
    case 5:
        alert("Sistema Finalizado")
    default:
        alert("Não existe essa opçao")
        break;
}
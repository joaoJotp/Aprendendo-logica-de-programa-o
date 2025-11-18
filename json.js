function pegarDados() {
    // Busca dados
    fetch('pessoas.json')
        // Converte a resposta em JSON
        .then(resposta => resposta.json())
        // Usa o JSON Convertido
        .then(dados => {
            const container = document.querySelector(".container")

            dados.forEach(pessoa => {
                const {nome, descricao} = pessoa 
                const div = document.createElement
                ("div")
                div.classList.add('card')               
                div.innerHTML=`<h2>${nome}</h2>
                <p>${descricao}</p>`
                container.appendChild(div)
            });
        })
           
            

    }
    pegarDados(

    )
        
     



let filmes = ["Veloses e furiosos", "Homem-aranha", "Carros", "Meu malvado favorito"]

filmes[1] = "Harry Potter"// altera valor no indice
filmes.push("Homem Aranha 6")// add no final
filmes.unshift("Homem Aranha 0")// add no inicio
filmes.pop()// remove ultimo indice do array
filmes.shift()// remove primeiro indice do array
/*console.log (filmes)
console.log(filmes[1])
console.log(filmes[2])
console.log(filmes[3])
console.log(filmes[4])
*/

for(const filme of filmes){
    console.log(filme)
}
/*
for(let i = 0; i < filmes.length; i ++){
console.log(filmes[i])
}*/

/*Praticando o DOM com FUNÇÕES
1 - Crie um arquivo .html e um .js
2 - Crie os elementos “h1” e “p” com DOM
3 - Coloque o nome do seu filme favorito no elemento “h1”
4 - Crie uma função que calcule a idade em anos desde o lançamento do filme até o ano atual e retorne a idade em número.
5 - Mostre a idade do filme no elemento “p” como no exemplo a seguir: “Interestelar tem 8 anos de idade!”
 COMECE A PARTIR DAQUI*/

 let variavelH1 = document.createElement("h1")
 console.log(variavelH1)

 let variavelP = document.createElement("p")

 /*variavelH1.innerText = "Velozes e furiosos"*/

 
 function filme (anoLancamento) {
return 2022-anoLancamento
 
}
console.log(filme(2001))

variavelP.innerText = `Velozes e furiosos tem ${filme(2001)} anos de idade!`

let variavelBody = document.querySelector("body")
variavelBody.append(variavelH1, variavelP)















const products = [{nome: "banana", preco: 8.99}, {nome: "maçã", preco: 5.99} , {nome: "caju", preco: 3.99} ]

let variavelMain = document.createElement("main")

let variavelBody = document.querySelector("body")

variavelBody.appendChild(variavelMain)

let listaUl = document.createElement("ul")

function loop () {
    for (let i = 0; i<products.length; i++) {
        console.log(products[i].nome)
        let variavelLoop = document.createElement("li")
        variavelLoop.innerText = products[i].nome
        listaUl.appendChild(variavelLoop)
        let variavelP2 = document.createElement("p")
        variavelP2.innerText = soma
        listaUl.appendChild(variavelP2)    
    }
}
loop()



function calcular (){
    let soma=0
    for (let i = 0; i<products.length; i++) {
        soma += products[i].preco
        console.log(soma)
    
    }
    return soma
}





variavelMain.appendChild(listaUl)

let variavelBotao = document.createElement("button")
variavelBotao.innerText = "Finalizar"


/*let textoTotal = document.createElement('spam')
textoTotal.innerText = "total"*/


let variavelSection = document.createElement("section")

variavelMain.appendChild(variavelSection)

variavelSection.appendChild(variavelBotao)

variavelMain.appendChild(variavelSection)

for (const key in products) {
    console.log(`${key}: ${products[key]}`);
}

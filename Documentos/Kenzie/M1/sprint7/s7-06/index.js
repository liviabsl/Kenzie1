/*let paragrafo = document.createElement('p')
paragrafo.innerText = "Olá, eu sou um parágrafo"
document.querySelector('body').appendChild(paragrafo)*/

/*const tagInput = document.createElement("input")
tagInput.placeholder = "Insira seu texto aqui"
const formulario = document.querySelector("form")
document.querySelector("form").appendChild(tagInput)*/

/*let titulo = document.createElement("h1")
titulo.innerText = "Título do Post"

let paragrafo = document.createElement("p")
paragrafo.innerText = "Descrição do Post"

let link = document.createElement("a")
link.innerText = "Ver post completo"


document.querySelector("article").appendChild(titulo)
document.querySelector("article").appendChild(paragrafo)
document.querySelector("article").appendChild(link)*/

let main = document.createElement("main")
main.innerText = "Conteúdo principal"

let paragrafo = document.createElement("p")
paragrafo.innerText = "Primeiro parágrafo"

let imagem = document.createElement("img")

let link = document.createElement("link")
link.innerText = ""

let lista1 = document.createElement("li")
let lista2 = document.createElement("li")
let lista3 = document.createElement("li")
let listaul = document.createElement("ul")

listaul.appendChild(lista1)
listaul.appendChild(lista2)
listaul.appendChild(lista3)

main.appendChild(listaul)

main.appendChild(paragrafo)





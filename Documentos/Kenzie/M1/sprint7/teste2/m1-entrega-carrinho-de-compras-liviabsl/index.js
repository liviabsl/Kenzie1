const products = [{nome: "banana", preco: 8.99}, {nome: "maçã", preco: 5.99} , {nome: "caju", preco: 3.99} ]

const variavelMain = document.createElement("main")

const variavelBody = document.querySelector("body")

variavelBody.appendChild(variavelMain)

const listaUl = document.createElement("ul")

function loop () {

    const variavelLi2 = document.createElement("li")
    const item = document.createElement("p")
    item.innerText = "Item"
    const valor = document.createElement("p")
    valor.innerText = "Valor"
    variavelLi2.append(item, valor)
    listaUl.appendChild(variavelLi2)


    for (let i = 0; i<products.length; i++) {
        console.log(products[i].nome)
        const variavelItemLi = document.createElement("li")
        listaUl.appendChild(variavelItemLi)
        const variavelP2 = document.createElement("p")
        const variavelP3 = document.createElement("p")
        variavelP2.innerText = products[i].nome
        variavelP3.innerText = products[i].preco

       variavelItemLi.appendChild(variavelP2)
       variavelItemLi.appendChild(variavelP3)     
       
    }
    


    const variavelLi = document.createElement("li")
    const precoTotal = document.createElement("p")
    precoTotal.innerText = calcular()
    const total = document.createElement("p")
    total.innerText = "Total"
    variavelLi.append(total, precoTotal)
    listaUl.appendChild(variavelLi)
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

const variavelBotao = document.createElement("button")
variavelBotao.innerText = "Finalizar"


const variavelSection = document.createElement("section")

variavelMain.appendChild(variavelSection)

variavelSection.appendChild(variavelBotao)

variavelMain.appendChild(variavelSection)


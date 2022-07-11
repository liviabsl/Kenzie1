const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];


function mercado (listaProducts) {
  
  const title    = listaProducts.title
  const price    = listaProducts.price
  const category = listaProducts.category
  const image    = listaProducts.image
  const imageDescription = listaProducts.imageDescription

  const productCard = document.createElement("li")
  const productImg = document.createElement("img")
  const productMain = document.createElement("main")
  const productTitle = document.createElement("h1")
  const productCategory = document.createElement("h5")
  const productPrice = document.createElement("strong")

  productCard.classList.add("product")
  productImg.classList.add("product-img")
  productMain.classList.add("product-main")
  productTitle.classList.add("product-title")
  productCategory.classList.add("product-category")
  productPrice.classList.add("product-price")


  productImg.src = image
  productTitle.innerText = title
  productCategory.innerText = category
  productPrice.innerText = price

  productMain.append(productTitle, productCategory, productPrice)
  productCard.append(productImg, productMain)



  return productCard
}

const secaoBebidas = document.querySelector(".bebidas")
const secaoFrutas = document.querySelector(".frutas")
const secaoHigiene = document.querySelector(".higiene")

function listarProdutos (listaProdutos) {
  for (let i = 0; i<listaProdutos.length; i++) {

    const produto = listaProdutos[i]
    const productCard = mercado(produto)

      if (produto.category == "bebidas") {
        secaoBebidas.appendChild(productCard)
      }
      else if (produto.category == "frutas"){
        secaoFrutas.appendChild(productCard)
      }
      else {
        secaoHigiene.appendChild(productCard)
      }
    
    //const ul = document.querySelector("ul")
    //ul.appendChild(productCard)

  }
}
listarProdutos(products)


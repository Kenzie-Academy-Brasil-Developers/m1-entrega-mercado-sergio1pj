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
const translatedCategory = {
    Bebidas : "drinks",
    Frutas : "fruits",
    Higiene : "hygiene"
}
let fruits = document.querySelector(".fruits");
let drinks = document.querySelector(".drinks");
let hygiene = document.querySelector(".hygiene");
function appendChildren(childrenElements, parentElement) {
    childrenElements.forEach(childElement => parentElement.appendChild(childElement));
    return "parentElement foi atualizado com sucesso";
}
function createProductCard(product) {
    let productCard = document.createElement("li");
    let productImg = document.createElement("img");
    let productMain =  document.createElement("main");
    let productTitle = document.createElement("h1");
    let productCategory =  document.createElement("h5");
    let productPrice =  document.createElement("strong");
    productImg.src = product.image !== undefined ? product.image : "./img/products/no-img.svg";
    productImg.alt = product.imageDescription;
    productTitle.innerText = product.title;
    productCategory.innerText = product.category;
    productPrice.innerText = product.price;
    productCard.classList.add("product");
    productImg.classList.add("product-img");
    productMain.classList.add("product-main");
    productTitle.classList.add("product-title");
    productCategory.classList.add("product-category");
    productPrice.classList.add("product-price");
    appendChildren([productTitle, productCategory, productPrice], productMain);
    appendChildren([productImg, productMain], productCard);
    return productCard;
}
function modSection(element, list) {
    let ul = document.createElement("ul");
    let elementClassName = element.className
    let subList = list.filter(product => elementClassName.includes(translatedCategory[product.category]));
    let subListElements = subList.map(product => createProductCard(product))
    appendChildren(subListElements, ul);
    element.appendChild(ul);
    return "Modificado com sucesso";
}
modSection(fruits, products);
modSection(drinks, products);
modSection(hygiene, products);

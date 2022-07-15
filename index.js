let fruits = document.querySelector(".fruits");
let drinks = document.querySelector(".drinks");
let hygiene = document.querySelector(".hygiene");
function appendChildren(childrenElements, parentElement) {
    childrenElements.forEach(child => parentElement.appendChild(child));
    return "parentElement foi atualizado com sucesso";
}
function createProductCard(product) {
    let productCard = document.createElement("li");
    let productImg = document.createElement("img");
    let productMain =  document.createElement("main");
    let productTitle = document.createElement("h1");
    let productCategory =  document.createElement("h5");
    let productPrice =  document.createElement("strong");
    productImg.src = product.image;
    productImg.alt = product.imageDescription;
    productTitle = product.title;
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
    return "ProductCard foi criado com sucesso";
}

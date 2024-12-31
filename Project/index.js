fetch("Products.json")
.then(res => res.json())
.then(data => showData(data))

function showData(products){
    let singleProduct = document.getElementById("grid-product");
    products.forEach((product)=>{
  let productDiv = document. createElement("div");
  productDiv.className ="product";
    productDiv.innerHTML = `
    <img src=${product.img} alt="">
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <p>price:${product.price}</p>
    <p>rating:${product.rating}</p>
    <button>buy</button>
    `
    singleProduct.appendChild(productDiv)
    })
   
    console.log(products)
};
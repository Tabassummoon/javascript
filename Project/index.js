fetch("Products.json")
.then(res => res.json())
.then(data => showData(data))

function showData(products){
    let singleProduct = document.getElementById("grid-product");
    products.forEach((product)=>{
  let productDiv = document. createElement("div");
  productDiv.className ="product";
    productDiv.innerHTML = `
    <h1>${product.name}</h1>
    <p>${product.price}</p>
    `
    singleProduct.appendChild(productDiv)
    })
   
    console.log(products)
};
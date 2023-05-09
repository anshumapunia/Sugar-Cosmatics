const containerElement = document.querySelector('.productdata');
const sortElement = document.querySelector('#sort');
const filterElement = document.querySelector('#filter');

 async function displayProducts() {
  fetch("https://byzantium-bison-suit.cyclic.app/product/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
      display(data)
    })
    .catch(error => {
      console.log(error);
    });
}
displayProducts()
function display(data) {
    let  containerElement = document.querySelector('.productdata');
  containerElement.innerHTML = "";

  if (Array.isArray(data)) {
    data.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.classList.add("product-image");
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement("h2");
      nameElement.classList.add("product-additional");
      nameElement.textContent = product.additional;
      productElement.appendChild(nameElement);

      const titleElement = document.createElement("p");
      titleElement.classList.add("product-brand");
      titleElement.textContent = product.brand;
      productElement.appendChild(titleElement);

   
      const priceElement = document.createElement("h2");
      priceElement.classList.add("product-price");
      priceElement.textContent = `${product.price}`;
      productElement.appendChild(priceElement);




      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Add to Cart";
      buttonElement.addEventListener("click", () => {
        addToCart(product);
      });  
      productElement.appendChild(buttonElement);

      containerElement.append(productElement);
    });
  }

}


const sortSelect = document.getElementById('sort1');

sortSelect.addEventListener('change', async () => {
  const selectedSort = sortSelect.value;

 
  try {
    let res = await fetch("https://byzantium-bison-suit.cyclic.app/product/");
    let result = await res.json();
    if (selectedSort === 'asc') {
      let arr = result.sort((a, b) => {
        return a.price - b.price
      });
      display(arr)
    } else {
      let arr = result.sort((a, b) => {
        return b.price - a.price
      });
      display(arr)
    }

  } catch (error) {
    console.error(error);
  }
  ;
});






function addToCart(product) {

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];



product.quantity=1
console.log(product)
cartItems.push(product);

localStorage.setItem('cartItems', JSON.stringify(cartItems));

console.log(`Product "${product.name}" added to cart`);
alert("Product added to cart successfully");
}


const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// const backToTopButton = document.getElementById('back');

// backToTopButton.addEventListener('click', ()=> {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
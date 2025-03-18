// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Array to hold cart items
let cart = [];

// Event listener for each button
addToCartButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const product = event.target.parentElement;
    const name = product.querySelector("h4").innerText;
    const price = product.querySelector("p").innerText;
    cart.push({ name, price });

    alert(${name} has been added to your cart.);
    console.log(cart);
  });
});
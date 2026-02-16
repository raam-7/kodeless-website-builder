// Handle Add to Cart button
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Handle Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing to our newsletter!');
});




// Retrieve existing cart data or initialize an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart Functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseInt(button.getAttribute("data-price"));
    const productImage = button.getAttribute("data-image");

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.name === productName);
    if (existingProduct) {
      // Increase the quantity if the product already exists
      existingProduct.quantity += 1;
    } else {
      // Add a new product to the cart
      cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify the user
    alert(`${productName} has been added to your cart.`);
  });
});
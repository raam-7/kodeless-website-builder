const productImages = {
    product1: ["https://www.ceat.com/content/dam/ceat/product-images/cricket/bat/ceat-marvel-ew/front.png", "https://www.ceat.com/content/dam/ceat/product-images/cricket/bat/ceat-marvel-ew/back.png", "https://www.ceat.com/content/dam/ceat/product-images/cricket/bat/ceat-marvel-ew/side.png", "https://www.ceat.com/content/dam/ceat/product-images/cricket/bat/ceat-marvel-ew/toe.png"],
    product2: ["https://m.media-amazon.com/images/I/71K9p0st-ZL._SX569_.jpg", "https://m.media-amazon.com/images/I/71ZHdvXT-EL._SX569_.jpg", "https://m.media-amazon.com/images/I/71aa+erRBdL._SX569_.jpg"],
    product3: ["https://crickstore.com/cdn/shop/files/img_20200415_184859_1_clipped_rev_1_p.png?v=1724672286&width=516", "https://crickstore.com/cdn/shop/files/img_20200415_185015_clipped_rev_1_p.png?v=1724672286&width=516", "https://crickstore.com/cdn/shop/files/img_20200415_185040_clipped_rev_1_p.png?v=1724672286&width=516"],
    product4: ["https://m.media-amazon.com/images/I/71TFJ1up9FL._SX569_.jpg", "https://m.media-amazon.com/images/I/41G-fEAKXSL._SX569_.jpg", "https://m.media-amazon.com/images/I/61MXLDRCN7L._SX569_.jpg", "https://m.media-amazon.com/images/I/61w4R8SuCDL._SX569_.jpg", "https://m.media-amazon.com/images/I/61LwqXtdNYL._SX569_.jpg", "https://m.media-amazon.com/images/I/61bTw5GTi5L._SX569_.jpg", "https://m.media-amazon.com/images/I/51isinu1VrL._SX569_.jpg"]
  };
  
  let currentProduct = null;
  let currentIndex = 0;
  
  // Open Slider
  function openSlider(productId) {
    currentProduct = productImages[productId];
    currentIndex = 0;
    document.getElementById("slider-image").src = currentProduct[currentIndex];
    document.getElementById("image-slider-modal").style.display = "block";
  }
  
  // Close Slider
  function closeSlider() {
    document.getElementById("image-slider-modal").style.display = "none";
  }
  
  // Show Previous Image
  function prevImage() {
    if (currentProduct) {
      currentIndex = (currentIndex - 1 + currentProduct.length) % currentProduct.length;
      document.getElementById("slider-image").src = currentProduct[currentIndex];
    }
  }
  
  // Show Next Image
  function nextImage() {
    if (currentProduct) {
      currentIndex = (currentIndex + 1) % currentProduct.length;
      document.getElementById("slider-image").src = currentProduct[currentIndex];
    }
  }
  
  // Add to Cart (placeholder functionality)
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("Product added to cart!");
    });
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

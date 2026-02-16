// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const product = e.target.closest(".product-card");
    const productName = product.querySelector("h3").textContent;
    const productPrice = parseInt(product.querySelector("p").textContent.replace("₹", ""));
    const productImage = product.querySelector("img").src;

    const existingProduct = cart.find((item) => item.name === productName);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
  });
});

// Render Cart
function renderCart() {
  const cartTableBody = document.querySelector("#cart-table tbody");
  cartTableBody.innerHTML = "";

  let totalPrice = 0;
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    totalPrice += item.price * item.quantity;

    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${index}, -1)">-</button>
          <input type="text" value="${item.quantity}" readonly>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      </td>
      <td>₹${item.price * item.quantity}</td>
      <td><button class="delete-btn" onclick="removeFromCart(${index})">Delete</button></td>
    `;
    cartTableBody.appendChild(row);
  });

  document.getElementById("total-price").textContent = totalPrice;
}

// Update Quantity
function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Load Cart on Page Load
if (document.querySelector("#cart-table")) {
  renderCart();
}

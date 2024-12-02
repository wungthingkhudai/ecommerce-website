// Cart data storage
let cart = [];
const cartIcon = document.getElementById("cart-icon");
const cartItemsDisplay = document.getElementById("cart-items");

// Function to update the cart display
function updateCartDisplay() {
  if (cart.length === 0) {
    cartItemsDisplay.innerHTML = "<p>No items in cart.</p>";
    cartIcon.textContent = "Cart (0)";
  } else {
    const cartHTML = cart.map(item => `
      <div>
        <p>${item.name} - $${item.price}</p>
      </div>
    `).join("");
    cartItemsDisplay.innerHTML = cartHTML;
    cartIcon.textContent = `Cart (${cart.length})`;
  }
}

// Event listener for adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productId = event.target.getAttribute('data-product');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));
    const productName = event.target.parentElement.querySelector('h3').textContent;

    // Add product to cart
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
    });

    updateCartDisplay();
  });
});

// Event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Proceeding to checkout...");
  }
});

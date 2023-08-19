let cart = {};

function addingProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      cart[productId].quantity++;
    } else {
      cart = {
        ...cart,
        [productId]: { quantity: 1 },
      };
    }
  };
}

function updateCartDisplay() {
  const cartEl = document.querySelector(".cart");
  cartEl.innerHTML = "";
  for (const [productId, {quantity}] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `Product ${productId}: Quantity ${quantity}`;
    cartEl.appendChild(cartItemDiv);
  }
}

const products = document.querySelectorAll(".product");
products.forEach((product) => {
  const productId = product.dataset.id;
  const button = product.querySelector("button");
  button.addEventListener("click", () => {
    const addToCart = addingProductToCart(productId);
    addToCart();
    updateCartDisplay();
  });
});
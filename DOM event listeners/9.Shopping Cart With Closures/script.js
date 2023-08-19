
const cartItems = document.querySelector('.cart-items')

const cart = {}

function addProductToCart(productId) {
    return function () {
        if (cart[productId]) {
            cart[productId]++;
        } else {
            cart[productId] = 1
        }
        updateCart()
    }
}

function updateCart() {
    cartItems.innerHTML = ''
    for (const [productId, quantity] of Object.entries(cart)) {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `Product ${productId}, Quantity: ${quantity}`;
        cartItems.appendChild(cartItemDiv);
    }
}

const productButtons = document.querySelectorAll('.product button');
productButtons.forEach(button => {
    const productId = button.parentElement.getAttribute('data-id');
    button.addEventListener('click', addProductToCart(productId));
});

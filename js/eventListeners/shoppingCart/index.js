const cart = {};
const products = Array.from(document.querySelectorAll('.product'));

function addProductToCart(productId) {
        if(cart.hasOwnProperty(productId)) {
            cart[productId]++ 
        } else {
            cart[productId] = 1;
        }
    }

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    for (const[productId, quantity] of Object.entries(cart)) {
        const carItemDiv = document.createElement("div");
        carItemDiv.className = "cart-item";
        carItemDiv.innerHTML = `${productId} : ${quantity}`;
        cartContainer.appendChild(carItemDiv);
    }
}



for (let product of products) {
    const button = product.querySelector("button");
    button.addEventListener("click", () => {addProductToCart(product.dataset.id)
        updateCart();
    })
}




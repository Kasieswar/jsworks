// Function to render cart items
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-container');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((product, index) => {
        const cartItem = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">Price: ₹${product.price}</p>
                            <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cartItem;
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Initialize the cart page
renderCart();

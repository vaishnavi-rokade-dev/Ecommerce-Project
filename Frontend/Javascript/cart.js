    function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Clear previous cart contents
    let total = 0;

        cart.forEach(item => {
        total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart('${item.name}')">Remove</button>`;
    cartDiv.appendChild(itemDiv);
        });

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
    }

    function removeFromCart(productName) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    }

    // Display cart items on page load
    displayCart();


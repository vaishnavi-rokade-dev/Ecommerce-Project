let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
document.getElementById('addToCartBtn').addEventListener('click', function () {
    const productName = "Cotton Designed dress"; // Update as necessary
    const price = 650; // Price after discount
    const image = "../image/kids/kid1.jpg"; // Default image (you can change based on selection)
    const sizeDropdown = document.querySelector('.choose select');
    const size = sizeDropdown.value;

    if (size === "Size") {
        alert("Please select a size before adding to the cart.");
        return;
    }

    // Add product to cart
    addToCart(productName, price, image, size);

    // Show success message
    alert(`${productName} added to cart successfully!`);
});

// Function to add items to cart
function addToCart(productName, price, image, size) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === productName && item.size === size);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1; 
    } else {
        cart.push({ name: productName, price: price, image: image, size: size, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}
function goToCart() {
    window.location.href = "Addcart.html";

}


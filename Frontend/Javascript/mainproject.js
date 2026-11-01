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

function navigateToPage() {
    const selectElement = document.getElementById("pageDropdown");
    const selectedPage = selectElement.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (username) {
        welcomeMessage.textContent = `Welcome, ${username}`;
    }
});
window.onload = function () {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}`;
    }
};

function logout() {
    localStorage.removeItem('username');
    document.getElementById('welcomeMessage').textContent = '';
    // Optionally redirect to login page or refresh
    window.location.href = "Registration.html"; // Redirect to registration or login page
}
document.getElementById('accountSection').addEventListener('click', function () {
    window.location.href = 'Account.html';
});
function Home() {
    window.location.href = "mainproject.html";
}
function AddCart() {
    window.location.href = "Addcart.html";
}
function About() {
    window.location.href = "Aboutus.html";
}
function LoginMain() {
    window.location.href = "Registration.html";
}
let slideshowContainer = document.getElementById('slideshowContainer');
let slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;
let slideInterval;

function startSlideshow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

function changeSlide(direction) {
    slides[currentSlideIndex].style.display = 'none'; // Hide current slide
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length; // Calculate next slide index
    slides[currentSlideIndex].style.display = 'block'; // Show next slide
}

slideshowContainer.addEventListener('mouseenter', () => {
    slideshowContainer.classList.add('visible'); // Make the container visible
    startSlideshow(); // Start the slideshow when hovering over the container
});

slideshowContainer.addEventListener('mouseleave', () => {
    slideshowContainer.classList.remove('visible'); // Hide the container when not hovering
    stopSlideshow(); // Stop the slideshow when mouse leaves
});

// Initial setup to show the first slide
slides[currentSlideIndex].style.display = 'block';


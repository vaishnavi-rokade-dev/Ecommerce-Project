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
/*// Get modal elements
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");

// Open modal
btn.onclick = function () {
    modal.style.display = "block";
}

// Close modal when the user clicks on <span> (x)
span.onclick = function () {
    modal.style.display = "none";
}

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("submissionForm").onsubmit = function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Here you can handle the submission (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Email:", email);

    // Close the modal
    modal.style.display = "none";

    // Optionally, reset the form
    this.reset();
}
*/
// Function to validate mobile number in the registration form
/*function validateMobile() {
    const mobileInput = document.getElementById('mobile');
    const mobileError = document.getElementById('mobileError');
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(mobileInput.value)) {
        mobileError.style.display = 'block';
    } else {
        mobileError.style.display = 'none';
    }
}*/

// Function to validate name in the registration form
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

// Function to submit the registration form
function submitForm() {
    // Retrieve form data
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const country = document.getElementById('country').value;
    const district = document.getElementById('district').value.trim();
    const taluka = document.getElementById('taluka').value.trim();
    const city = document.getElementById('city').value.trim();
    const street = document.getElementById('street').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate mandatory fields
    if (!name || !mobile || !password || !district || !taluka || !city || !street || !zip || !country) {
        alert('Please fill all mandatory details properly.');
        return;
    }

    // Validate mobile number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert('Mobile number must be exactly 10 digits and contain only numbers.');
        return;
    }

    // Construct a user object
    const user = {
        name,
        mobile,
        password,
        email,
        country,
        district,
        taluka,
        city,
        street,
        zip,
        gender
    };

    fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            alert("Registration successful!");
            // Optionally redirect to the login page
            window.location.href = "login.html";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });

}

// Function to handle navigation to the login page
function alreadyRegister() {
    window.location.href = "login.html";
}

// Function to handle navigation to the Contact Us page
function Contactus() {
    window.location.href = "Contactus.html";
}

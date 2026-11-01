document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting

    let valid = true;

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.textContent = '';
    });

    // Full Name Validation
    const fullName = document.getElementById('full-name').value;
    if (fullName.trim() === '') {
        document.getElementById('name-error').textContent = 'Full name is required.';
        valid = false;
    }

    // Phone Number Validation
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneRegex = /^\d{3}[-]\d{3}[-]\d{4}$/; // Valid format: 123-456-7890
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phone-error').textContent = 'Enter a valid phone number in the format: 123-456-7890';
        valid = false;
    }

    // Address Validation
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('address-error').textContent = 'Address is required.';
        valid = false;
    }

    // City Validation
    const city = document.getElementById('city').value;
    if (city.trim() === '') {
        document.getElementById('city-error').textContent = 'City is required.';
        valid = false;
    }

    // State Validation
    const state = document.getElementById('state').value;
    if (state.trim() === '') {
        document.getElementById('state-error').textContent = 'State is required.';
        valid = false;
    }

    // Zip Code Validation
    const zipCode = document.getElementById('zip-code').value;
    const zipRegex = /^\d{3} \d{3}$/; // 6 digits with space in the middle (e.g. "123 456")
    if (!zipRegex.test(zipCode)) {
        document.getElementById('zip-error').textContent = 'Zip code must be 6 digits in the format: 123 456.';
        valid = false;
    }

    // Cardholder Name Validation
    const cardName = document.getElementById('card-name').value;
    if (cardName.trim() === '') {
        document.getElementById('card-name-error').textContent = 'Name on the card is required.';
        valid = false;
    }

    // Credit Card Number Validation
    const cardNumber = document.getElementById('card-number').value.replace(/\D/g, ''); // Remove non-numeric characters
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        document.getElementById('card-number-error').textContent = 'Credit card number must be 16 digits.';
        valid = false;
    }

    // Expiration Month Validation
    const expMonth = document.getElementById('exp-month').value;
    if (expMonth.trim() === '') {
        document.getElementById('exp-month-error').textContent = 'Expiration month is required.';
        valid = false;
    }

    // Expiration Year Validation
    const expYear = document.getElementById('exp-year').value;
    if (expYear.trim() === '' || isNaN(expYear) || expYear.length !== 4) {
        document.getElementById('exp-year-error').textContent = 'Expiration year must be a valid 4-digit year.';
        valid = false;
    }

    // CVV Validation
    const cvv = document.getElementById('cvv').value;
    if (cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
        document.getElementById('cvv-error').textContent = 'CVV must be 3 or 4 digits.';
        valid = false;
    }

    // If all validations passed, submit the form
    if (valid) {
        alert('Form submitted successfully!');
        // If you want to actually submit the form to a server, you can uncomment the following line:
        // document.getElementById('payment-form').submit();
    } else {
        alert('Please fix the errors before submitting.');
    }
});

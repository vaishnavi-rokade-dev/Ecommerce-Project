document.addEventListener('DOMContentLoaded', () => {
    loadUserDetails();
});

function loadUserDetails() {
    const username = localStorage.getItem('username');
    const mobile = localStorage.getItem('mobile');
    const email = localStorage.getItem('email');
    const country = localStorage.getItem('country');
    const district = localStorage.getItem('district');
    const taluka = localStorage.getItem('taluka');
    const city = localStorage.getItem('city');
    const street = localStorage.getItem('street');
    const zip = localStorage.getItem('zip');

    // Display the retrieved data
    document.getElementById('nameField').textContent = username || '';
    document.getElementById('mobileField').textContent = mobile || '';
    document.getElementById('emailField').textContent = email || '';
    document.getElementById('countryField').textContent = country || '';
    document.getElementById('districtField').textContent = district || '';
    document.getElementById('talukaField').textContent = taluka || '';
    document.getElementById('cityField').textContent = city || '';
    document.getElementById('streetField').textContent = street || '';
    document.getElementById('zipField').textContent = zip || '';
}

function editDetails() {
    // Show input fields and hide spans
    toggleFields(true);

    // Fill inputs with current values
    document.getElementById('nameInput').value = document.getElementById('nameField').textContent;
    document.getElementById('mobileInput').value = document.getElementById('mobileField').textContent;
    document.getElementById('emailInput').value = document.getElementById('emailField').textContent;
    document.getElementById('countryInput').value = document.getElementById('countryField').textContent;
    document.getElementById('districtInput').value = document.getElementById('districtField').textContent;
    document.getElementById('talukaInput').value = document.getElementById('talukaField').textContent;
    document.getElementById('cityInput').value = document.getElementById('cityField').textContent;
    document.getElementById('streetInput').value = document.getElementById('streetField').textContent;
    document.getElementById('zipInput').value = document.getElementById('zipField').textContent;

    // Show save button and hide edit button
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'inline';
}

function saveDetails() {
    // Get the values from inputs
    const name = document.getElementById('nameInput').value;
    const mobile = document.getElementById('mobileInput').value;
    const email = document.getElementById('emailInput').value;
    const country = document.getElementById('countryInput').value;
    const district = document.getElementById('districtInput').value;
    const taluka = document.getElementById('talukaInput').value;
    const city = document.getElementById('cityInput').value;
    const street = document.getElementById('streetInput').value;
    const zip = document.getElementById('zipInput').value;

    // Save the updated values in localStorage
    localStorage.setItem('username', name);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('email', email);
    localStorage.setItem('gender', gender);
    localStorage.setItem('country', country);
    localStorage.setItem('district', district);
    localStorage.setItem('taluka', taluka);
    localStorage.setItem('city', city);
    localStorage.setItem('street', street);
    localStorage.setItem('zip', zip);

    // Update displayed fields
    loadUserDetails();

    // Show edit button and hide save button
    toggleFields(false);
    document.getElementById('editButton').style.display = 'inline';
    document.getElementById('saveButton').style.display = 'none';
}

function toggleFields(isEditing) {
    const displayStyle = isEditing ? 'none' : 'inline';
    const inputStyle = isEditing ? 'inline' : 'none';

    document.querySelectorAll('.form-field span').forEach(span => {
        span.style.display = displayStyle;
    });
    document.querySelectorAll('.form-field input').forEach(input => {
        input.style.display = inputStyle;
    });
}

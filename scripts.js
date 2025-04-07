// Grab Form Elements
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal_code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

// Error Elements
const emailError = document.getElementById("email-error");
const countryError = document.getElementById("country-error");
const postalError = document.getElementById("postal-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

// Email validation
function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address (e.g. user@example.com)";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address";
    }
    emailError.className = "error active";
}

email.addEventListener("blur", () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = "error";
    } else {
        showEmailError();
    }
});

email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = "error";
    }
});

// Country Validation
function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = "Please select a country";
    }
    countryError.className = "error active";
}

country.addEventListener("blur", () => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = "error";
    } else {
        showCountryError();
    }
});

country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = "error";
    }
});

// Postal Code Validation
function showPostalError() {
    if (postal.validity.valueMissing) {
        postalError.textContent = "You need to enter a 5 digit postal code (e.g. 12345)"
    } else if (postal.validity.patternMismatch) {
        postalError.textContent = "Must be exactly 5 digits (no letters or symbols)"
    }
    postalError.className = "error active";
}

postal.addEventListener("blur", () => {
    if (postal.validity.valid) {
        postalError.textContent = '';
        postalError.className = "error";
    } else {
        showPostalError();
    }
});

postal.addEventListener("input", () => {
    if (postal.validity.valid) {
      postalError.textContent = "";
      postalError.className= "error";
    }
});

// Password Validation
function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter a password";
        passwordError.className = "error active";
    } else if (password.validity.tooShort) {
        passwordError.textContent = "Password must be 8 characters or more";
        passwordError.className = "error active";
    }
}

password.addEventListener("blur", () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = "error";
    } else {
        showPasswordError();
    }
});

password.addEventListener("input", () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = "error";
    }
});


// Confirm Password Validation
function confirmCheck() {
    const passwordValue = document.getElementById("password").value;
    const confirmValue = document.getElementById("confirm").value;
    if (passwordValue !== confirmValue) {
        confirmError.textContent = "Passwords do not match!";
        confirmError.className = "error active";
        confirmPassword.setCustomValidity("Passwords must match");
    } else if (confirmValue === '') {
        confirmError.textContent = "Please confirm your password";
        confirmError.className = "error active";
        confirmPassword.setCustomValidity("Password confirmation required");
    } else if (confirmValue === passwordValue) {
        confirmError.textContent = '';
        confirmError.className = "error";
        confirmPassword.setCustomValidity("");
    }
}

confirmPassword.addEventListener("blur", confirmCheck);
confirmPassword.addEventListener("input", confirmCheck);

// Check if the whole form is valid, if so, give the user a cookie
submit.addEventListener("click", (event) => {
    if (form.reportValidity()) {
        event.preventDefault();
        alert("Nice job! You filled out the form correctly! 🖐️");
    } else {
        event.preventDefault();
        const invalidField = form.querySelector(':invalid');
        invalidField?.focus();
    }
});
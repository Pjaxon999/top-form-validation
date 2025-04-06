// Grab Form Elements
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal_code");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
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
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Form");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const firstError = document.getElementById("firstError");
    const lastError = document.getElementById("lastError");
    const numberError = document.getElementById("numberError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    function validateFirst() {
        const firstRegex = /^[A-Za-z\s]+$/;
        if (!firstName.value.match(firstRegex)) {
            firstError.textContent = "Alphabetic characters are only allowed.";
            firstName.classList.add("input-error");
            return false;
        }
        firstError.textContent = "";
        firstName.classList.remove("input-error");
        return true;
    }

    function validateLast() {
        const lastRegex = /^[A-Za-z\s]+$/;
        if (!lastName.value.match(lastRegex)) {
            lastError.textContent = "Alphabetic characters are only allowed.";
            lastName.classList.add("input-error");
            return false;
        }
        lastError.textContent = "";
        lastName.classList.remove("input-error");
        return true;
    }

    function validateNumber() {
        const numberRegex = /^\d{10,15}$/;
        if (!number.value.match(numberRegex)) {
            numberError.textContent = "Phone number must be 10-15 digits.";
            number.classList.add("input-error");
            return false;
        }
        numberError.textContent = "";
        number.classList.remove("input-error");
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.match(emailRegex)) {
            emailError.textContent = "Enter valid email address.";
            email.classList.add("input-error");
            return false;
        }
        emailError.textContent = "";
        email.classList.remove("input-error");
        return true;
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password.value.match(passwordRegex)) {
            passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, and a number.";
            password.classList.add("input-error");
            return false;
        }
        passwordError.textContent = "";
        password.classList.remove("input-error");
        return true;
    }

    firstName.addEventListener("input", validateFirst);
    lastName.addEventListener("input", validateLast);
    number.addEventListener("input", validateNumber);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateFirst() && validateLast() && validateNumber() && validateEmail() && validatePassword()) {
            successMessage.textContent = "Submission successful!";
        } else {
            successMessage.textContent = "";
        }
    });
});

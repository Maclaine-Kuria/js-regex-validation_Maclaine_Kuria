document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Form");

  const firstName = document.getElementById("FirstName");
  const lastName = document.getElementById("LastName");
  const phone = document.getElementById("number");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("numberError");
  const phoneError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  function validateName() {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!firstName.value.match(nameRegex)) {
            nameError.textContent = "Only alphabetic characters and spaces allowed.";
            firstName.classList.add("input-error");
            return false;
        }
        nameError.textContent = "";
        firstName.classList.remove("input-error");
        return true;
    }
  function validateName() {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!fullName.value.match(nameRegex)) {
            nameError.textContent = "Only alphabetic characters and spaces allowed.";
            lastName.classList.add("input-error");
            return false;
        }
        nameError.textContent = "";
        lastName.classList.remove("input-error");
        return true;
    }

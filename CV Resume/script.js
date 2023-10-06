document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Client-side form validation
        if (!validateForm()) {
            return;
        }

        // Simulate form submission (replace this with your own logic)
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Display a confirmation message with a smooth transition
        confirmationMessage.style.opacity = "0";
        confirmationMessage.style.display = "block";

        setTimeout(() => {
            confirmationMessage.innerHTML = `Thank you, ${formDataObject.name}! Your message has been sent.`;
            confirmationMessage.style.opacity = "1";
        }, 100);

        // Clear the form
        contactForm.reset();
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Invalid email format");
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message is required");
            isValid = false;
        } else {
            showSuccess(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector(".error-message");
        formControl.classList.add("error");
        errorMessage.textContent = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
        const errorMessage = formControl.querySelector(".error-message");
        errorMessage.textContent = "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

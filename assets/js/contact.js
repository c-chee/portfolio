document.addEventListener('DOMContentLoaded', () => {
    /** =================
     *  Contact Form
    ====================== */
    // Cache DOM elements
    const contactForm = document.getElementById('contact-form');
    const validationMessage = document.getElementById('validation-message');
    const contactSection = document.querySelector('.contact-section');
    const thankyouMessage = document.getElementById('thankyou-section');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Grab values and trim whitespace
            const formName = document.getElementById('name-input').value.trim();
            const formEmail = document.getElementById('email-input').value.trim();
            const formPhone = document.getElementById('phone-input').value.trim();
            const formMessage = document.getElementById('message-input').value.trim();

            // Validate form
            if (!formName || !formEmail || !formPhone || !formMessage) {
                showValidation('Form is left empty! Please fill out required fields.', 'red');
                return;
            }

            if (!isValidEmail(formEmail)) {
                showValidation('Please enter a valid email.', 'red');
                return;
            }

            if (!isValidPhone(formPhone)) {
                showValidation('Please enter a valid phone number.', 'red');
                return;
            }

            // Clear any previous validation messages
            showValidation('');

            // Swap visibility between form and thank-you message
            toggleVisibility(contactSection, thankyouMessage);

            // Reset form and revert back after 3 seconds
            setTimeout(() => {
                toggleVisibility(thankyouMessage, contactSection);
                contactForm.reset();
            }, 3000);
        });
    }

    // Helper function to show validation messages
    function showValidation(message, color = 'black') {
        validationMessage.textContent = message;
        validationMessage.style.color = color;
    }

    // Helper function to check email format
    function isValidEmail(email) {
        const emailPattern = /\S+@\S+\.\S+/;
        return emailPattern.test(email);
    }

    // Helper function to check phone number format
    function isValidPhone(phone) {
        // Allow digits, spaces, dashes, parentheses, and +, and must be 10-15 digits
        const phonePattern = /^[+\d]?(?:[\d-.\s()]*)$/;
        const digitsOnly = phone.replace(/\D/g, ''); // Remove non-digit characters
        return phonePattern.test(phone) && digitsOnly.length >= 10 && digitsOnly.length <= 15;
    }

    // Helper function to toggle visibility
    function toggleVisibility(hideElement, showElement) {
        hideElement.style.display = 'none';
        showElement.style.display = 'block';
    }

});

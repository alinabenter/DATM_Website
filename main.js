// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');

    // Add an event listener for the form submit event
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Display a simple alert with the form data
        alert(`Name: ${name}\nEmail: ${email}`);
    });
});

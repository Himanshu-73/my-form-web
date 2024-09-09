// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    this.textContent = body.classList.contains('dark-theme') ? 'Switch to Light Theme' : 'Switch to Dark Theme';
    document.querySelectorAll('input').forEach(input => {
        input.classList.toggle('light-theme', body.classList.contains('light-theme'));
    });
});

// Simplified form submission handling for Node.js backend
document.getElementById('data-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const formData = new FormData(this);
    const plainFormData = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plainFormData),
        });
        // Ensure the server processes the request successfully
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
        }
        const resultMessage = await response.text(); // Or .json() if you expect JSON response
        alert("Form submitted successfully!"); // Or update the UI accordingly
        
        // Optional: Show a thank you message or reset the form
        document.getElementById('thank-you-message').textContent = `Thank you ${plainFormData.name}, your submission has been received.`;
        document.getElementById('thank-you-message').style.display = 'block';
        // Clear form fields
        this.reset();
    } catch (error) {
        console.error('Form submission error:', error);
        alert("An error occurred. Please try again."); // Or update the UI accordingly
    }
});
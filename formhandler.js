document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('yourFormId');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!');
    });});

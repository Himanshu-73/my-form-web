// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const isDarkTheme = body.classList.contains('dark-theme');

    // Toggle between dark and light themes
    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        this.textContent = 'Switch to Dark Theme';

        // Apply light theme to inputs and form
        document.querySelectorAll('input').forEach(input => {
            input.classList.add('light-theme');
        });
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        this.textContent = 'Switch to Light Theme';

        // Remove light theme from inputs and form
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('light-theme');
        });
    }
});

// Form submission handling
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const socials = document.getElementById('socials').value;
    const drive = document.getElementById('drive').value;

    // Process form submission (e.g., send data to server)
    // Here, you would typically use an AJAX request to send the data
    document.getElementById("submitForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
      
        // Create a new FormData object to capture form input
        var formData = new FormData(this);
      
        // Send an AJAX POST request to submit_form.php
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_form.php", true);
      
        // Callback function to handle the response
        xhr.onload = function () {
          if (xhr.status === 200) {
            // Display a thank you message or handle the response here
            alert("Form submitted successfully!");
          } else {
            alert("An error occurred. Please try again.");
          }
        };
      
        // Send the form data to the server
        xhr.send(formData);
      });
      

    // Show thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.textContent = `Greeting ${name}, we want to thank you for your valuable feedback.`;
    thankYouMessage.style.display = 'block';

    // Clear form fields
    document.getElementById('data-form').reset();
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          contact: document.getElementById('contact').value,
          socials: document.getElementById('socials').value,
          achievements: document.getElementById('achievements').value,
      };

      try {
          const response = await fetch('/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const result = await response.text();
          alert(result); // Show response from the server
      } catch (error) {
          console.error('Error submitting form:', error);
      }
  });
});

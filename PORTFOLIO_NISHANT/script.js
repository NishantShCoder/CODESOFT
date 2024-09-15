// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate the form fields
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter your message.');
        return;
    }

    // If all fields are valid, submit the form (for now, just show an alert)
    alert('Thank you for your message!');
    // Add actual form submission logic here, e.g., send data to a server
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Back-to-top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
});

// Dark mode toggle (optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

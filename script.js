// Get elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle menu on click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
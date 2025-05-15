const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

// Show the mobile menu
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

// Hide the mobile menu
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});
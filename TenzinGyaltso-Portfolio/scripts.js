// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // All your JavaScript code will go inside this function
    
    // 1. Smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // 2. Project filter functionality
    setupProjectFilters();
    
    // 3. Dark/light mode toggle
    setupThemeToggle();
    
    // 4. Form submission handling
    setupContactForm();
    
    // 5. Animation on scroll
    setupScrollAnimations();
    
    // 6. Skills progress bars animation
    animateSkills();
});
// scripts.js - Complete Implementation

// Main function that runs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Call all setup functions
    setupSmoothScrolling();
    setupProjectFilters();
    setupThemeToggle();
    setupContactForm();
    setupScrollAnimations();
    animateSkills();
    updateCurrentYear();
    setupMobileMenu();
});

// 1. Smooth scrolling implementation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL
            history.pushState(null, null, targetId);
        });
    });
}

// 2. Project filtering implementation
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter button');
    const projectItems = document.querySelectorAll('.project');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectItems.forEach(project => {
                    project.style.display = 
                        (filterValue === 'all' || project.classList.contains(filterValue)) 
                        ? 'block' : 'none';
                });
            });
        });
    }
}

// 3. Theme toggle implementation
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('darkTheme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'true' || (savedTheme === null && prefersDark)) {
            document.body.classList.add('dark-theme');
        }
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
        });
    }
}

// 4. Contact form implementation
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            // Simple validation
            if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Form data:', {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            });
            
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
}

// 5. Scroll animations implementation
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// 6. Skills animation implementation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length > 0) {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-level');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
}

// 7. Utility functions
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('open');
        });
    }
}
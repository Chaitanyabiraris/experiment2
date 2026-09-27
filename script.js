// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', function () {
    document.querySelector('#featured').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Learn More buttons
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function () {
        const carName = this.closest('.car-card').querySelector('h3').textContent;
        alert(`Learn more about ${carName}!\n\nThis is a showcase website. Click to view detailed specifications and more information.`);
    });
});

// Gallery items - add click animation
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        alert('Gallery Image Clicked!\n\nThis interactive gallery showcases stunning supercars from around the world.');
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    let formData = {};
    inputs.forEach(input => {
        if (input.value.trim()) {
            formData[input.placeholder] = input.value;
        }
    });
    
    if (Object.keys(formData).length === 3) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.car-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add parallax effect on scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// Dynamic car specs highlighting
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        const specs = this.querySelector('.specs');
        specs.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
    });
    
    card.addEventListener('mouseleave', function () {
        const specs = this.querySelector('.specs');
        specs.style.textShadow = 'none';
    });
});

// Add event listeners for keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Can be used for closing modals if added in future
        console.log('Escape key pressed');
    }
});

// Console message for developers
console.log('%cWelcome to SuperCar Showcase!', 'color: #FF0000; font-size: 20px; font-weight: bold;');
console.log('%cExplore the world of supercars and experience automotive excellence.', 'color: #FFD700; font-size: 14px;');

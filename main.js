 // Simple mobile menu toggle
 document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').style.display = 
        document.querySelector('nav ul').style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
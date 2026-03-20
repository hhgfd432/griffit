// AOS Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Button interactions
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary') && !this.closest('.demo-banner')) {
            // Show coming soon for demo buttons
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                const originalText = this.textContent;
                this.textContent = 'Coming Soon!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1500);
            }
        }
    });
});
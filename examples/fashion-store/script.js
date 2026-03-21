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

// Slider dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

// Add to cart animation
document.querySelectorAll('.btn-small').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Added! ✓';
        this.style.background = '#10b981';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 1500);
    });
});
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

// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Form submission
document.querySelector('.reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Reserved! ✓';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 2000);
});
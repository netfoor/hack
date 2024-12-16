// js/animations.js
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clases de animación
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
});

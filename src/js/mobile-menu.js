// En js/mobile-menu.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileButton = document.querySelector('.nav__mobile-button');
    const mobileMenu = document.querySelector('.nav__mobile');
    const mobileButtonSpans = mobileButton.querySelectorAll('span');

    mobileButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Anima las líneas del botón
        mobileButtonSpans.forEach(span => {
            span.classList.toggle('active');
        });
    });

    // Cierra el menú al hacer click en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileButtonSpans.forEach(span => {
                span.classList.remove('active');
            });
        });
    });
});
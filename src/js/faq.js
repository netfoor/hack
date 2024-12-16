// js/faq.js
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Cerrar todos los items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Abrir el item actual si estaba cerrado
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
}); 
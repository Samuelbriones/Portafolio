document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('make-it-pop');
    const slider = document.getElementById('myRange');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    checkbox.addEventListener('change', function() {
        portfolioItems.forEach(item => {
            item.style.transform = this.checked ? 'scale(1.05)' : 'scale(1)';
        });
    });

    slider.addEventListener('input', function() {
        portfolioItems.forEach(item => {
            item.style.opacity = this.value / 100;
        });
    });
});
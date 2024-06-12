document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo-placeholder');
    logos.forEach(logo => {
        const container = document.querySelector('.logo-container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const maxLeft = containerWidth - logo.clientWidth;
        const maxTop = containerHeight - logo.clientHeight;
        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;
        logo.style.left = `${randomLeft}px`;
        logo.style.top = `${randomTop}px`;
    });
});
// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle see prices button click
    const seePricesBtn = document.querySelector('button.bg-black');
    seePricesBtn?.addEventListener('click', function() {
        alert('This is a demo. In a real application, this would calculate prices based on the route.');
    });

    // Handle input focus events to simulate the real Uber experience
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.border = '2px solid black';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.border = 'none';
        });
    });
});

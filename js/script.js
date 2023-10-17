const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});
// Add an event listener to trigger the effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Select the section to animate
    const section = document.querySelector('.section');
    
    // Apply the fade-and-slide-in effect
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
});

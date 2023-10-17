const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});
// Add an event listener to trigger the effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Select all sections on the page
    const sections = document.querySelectorAll('.blog-post, .section');
    
    // Loop through each section and apply the fade-and-slide-in effect
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
});

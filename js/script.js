const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-slide-section');
  sections.forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
});

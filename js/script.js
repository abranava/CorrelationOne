const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.resume-section, .introduction, .about-me, .site-description, .blog-post, .call-to-action');
  
  setTimeout(() => {
    sections.forEach(section => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  }, 1000); // Change 100 to control the delay, in milliseconds
});

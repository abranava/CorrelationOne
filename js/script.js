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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');

  const checkInputValidity = () => {
    let isValid = nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity();
    submitBtn.disabled = !isValid;
    return isValid;
  };

  const toggleErrorMessage = (input) => {
    const errorSpan = input.nextElementSibling;
    if (!input.checkValidity()) {
      errorSpan.style.display = 'inline';
    } else {
      errorSpan.style.display = 'none';
    }
  };

  form.addEventListener('input', function () {
    toggleErrorMessage(nameInput);
    toggleErrorMessage(emailInput);
    toggleErrorMessage(messageInput);
    checkInputValidity();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkInputValidity()) {
      // Assuming here you would normally have code to actually submit the form
      // For example, via AJAX or by sending it to a server-side script
      successMessage.style.display = 'block';
    }
  });
});

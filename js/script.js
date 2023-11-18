const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map on Paris
    var map = L.map('map').setView([48.8566, 2.3522], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Eiffel Tower Marker
    var eiffelTower = L.marker([48.8584, 2.2945]).addTo(map);
    eiffelTower.bindPopup("<b>Eiffel Tower</b><br>Iconic Parisian landmark.");

    // Louvre Museum Marker
    var louvreMuseum = L.marker([48.8606, 2.3376]).addTo(map);
    louvreMuseum.bindPopup("<b>Louvre Museum</b><br>World's largest art museum.");

    // Circle for a nearby area to visit around Eiffel Tower
    var circle = L.circle([48.8584, 2.2945], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500 // Radius in meters
    }).addTo(map);
    circle.bindPopup("Area to explore near the Eiffel Tower.");
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
        // AJAX request to submit the form data to Slack webhook
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK', true); //ADJUST SLACK WEBHOOK
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    // Handle successful submission here
                    successMessage.style.display = 'block';
                } else {
                    // Handle errors here
                    console.error('Slack webhook error:', this.status, this.responseText);
                }
            }
        };

        var formData = {
            text: `New submission from the website:\nName: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`
        };
        
        xhr.send(JSON.stringify(formData));
    }
});

});

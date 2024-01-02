// Function to toggle the visibility of sections with smooth transition
function toggleSection(sectionId) {
  var sections = document.querySelectorAll('section');
  sections.forEach(function (section) {
    section.style.opacity = 0;
    section.style.display = 'none';
  });

  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    // Add a delay before fading in to enhance smooth transition
    setTimeout(function () {
      selectedSection.style.opacity = 1;
    }, 50);
  }
}

// Function to scroll smoothly to a section
function scrollToSection(sectionId) {
  var targetSection = document.getElementById(sectionId);
 if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

// Event listeners for navigation links
document.querySelectorAll('nav a').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var sectionId = this.getAttribute('href').substring(1);
    toggleSection(sectionId);
    scrollToSection(sectionId);
  });
});

// Event listener for toggling certificates details
document.getElementById('certificates').addEventListener('click', function (e) {
  if (e.target && e.target.tagName === 'A') {
    var certificateTitle = document.getElementById('certificate-title');
    certificateTitle.innerText = e.target.innerText;
    certificateTitle.classList.remove('hidden');
  }
});

// Hiding the certificate title initially with opacity transition
document.getElementById('certificate-title').classList.add('hidden');

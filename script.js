const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");
const downloadCv = document.querySelector('.download');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');



// Hamburger icon toggle
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  toggleBtn.innerHTML = navMenu.classList.contains("open")
    ? 'X'
    : '<i class="fas fa-bars"></i>';
});

// Download CV functionality
downloadCv.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Areeb_Ali_CV.pdf';
  link.download = 'Areeb Ali Resume.pdf';
  link.click();
});

// Scroll active link update
window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

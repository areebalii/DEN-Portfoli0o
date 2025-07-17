const downloadCv = document.querySelector('.download');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const menuToggle = document.querySelector('.menu-toggle');
const homeSocialIcons = document.querySelector('.home-content .social-icons');


// event listener download button
downloadCv.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Areeb_Ali_CV.pdf';
  link.download = 'Areeb Ali Resume.pdf';
  link.click();
});

// add active class functionality to navigation links
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

// toggle menu functionality
menuToggle.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
  menuToggle.classList.toggle('active');
});
// when click on any link the menu will close
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
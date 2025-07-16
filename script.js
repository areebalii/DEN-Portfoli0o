const downloadCv = document.querySelector('.download');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

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

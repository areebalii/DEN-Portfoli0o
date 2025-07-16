const downloadCv = document.querySelector('.download');

// event listener download button
downloadCv.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'Areeb_Ali_CV.pdf';
  link.download = 'Areeb Ali Resume.pdf';
  link.click();
});
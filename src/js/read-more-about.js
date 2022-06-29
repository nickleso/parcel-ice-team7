const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.about-wrapper');

readMoreBtn.addEventListener('click', e => {
  text.classList.toggle('show-more');
  if (readMoreBtn.innerText === 'Less') {
    readMoreBtn.innerText = 'Read More';
  } else {
    readMoreBtn.innerText = 'Less';
  }
});

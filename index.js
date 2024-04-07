const menuButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const closeButton = document.querySelector('.header__close-button');
closeButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});
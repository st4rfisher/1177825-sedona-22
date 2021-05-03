const navigation = document.querySelector('.navigation');
const openButton = document.querySelector('.header__toggle');
const closeButton = navigation.querySelector('.navigation__close-button');

const hideNavigation = () => {
  navigation.classList.remove('navigation--active', 'navigation--no-js');
}

const showNavigation = () => {
  navigation.classList.add('navigation--active');
}

document.addEventListener('DOMContentLoaded', hideNavigation);
openButton.addEventListener('click', showNavigation);
closeButton.addEventListener('click', hideNavigation);


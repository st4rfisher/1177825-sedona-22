const navigation = document.querySelector('.navigation');
const openButton = document.querySelector('.header__toggle');
const closeButton = navigation.querySelector('.navigation__close-button');

const hideNavigation = () => {
  closeButton.classList.remove('navigation__close-button--show');
  navigation.classList.remove('navigation--active');
}

const showNavigation = () => {
  closeButton.classList.add('navigation__close-button--show');
  navigation.classList.add('navigation--active');
}

const hideNoJsNavigation = () => {
  navigation.classList.remove('navigation--no-js');
}

document.addEventListener('DOMContentLoaded', function () {
  hideNoJsNavigation();
  hideNavigation();
});

openButton.addEventListener('click', showNavigation);
closeButton.addEventListener('click', hideNavigation);

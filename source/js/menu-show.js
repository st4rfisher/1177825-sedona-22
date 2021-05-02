const navigation = document.querySelector('.navigation');
const openButton = document.querySelector('.header__toggle');
const closeButton = navigation.querySelector('.navigation__close-button');

var removeClasses = () => {
  navigation.classList.remove('navigation--active', 'navigation--no-js');
}

var addClasses = () => {
  navigation.classList.add('navigation--active', 'navigation--no-js');
}

document.addEventListener('DOMContentLoaded', removeClasses);
openButton.addEventListener('click', addClasses);
closeButton.addEventListener('click', removeClasses);


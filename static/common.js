// Menu
var menuPopup = document.getElementById('menu-popup');
var closeMenuButton = document.getElementById('close-menu');
var openMenuButton = document.getElementById('open-menu');

function toggleMenu() {
  menuPopup.classList.toggle('hidden');
}

openMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

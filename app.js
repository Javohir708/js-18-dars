// JavaScript for toggling the side menu
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});
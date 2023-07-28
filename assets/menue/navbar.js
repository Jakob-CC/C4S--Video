let navMenu = document.querySelector('.nav-menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
});

(function() {

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuNav = document.querySelector('.menu-nav');
const NavItems = document.querySelectorAll('.menu-nav__item');



menuBtn.addEventListener('click', function(e) {    
    menuBtn.classList.toggle('isClosed');
    menu.classList.toggle('isShown');
    menuNav.classList.toggle('isShown');
    NavItems.forEach(item => item.classList.toggle('isShown'));
});


})();
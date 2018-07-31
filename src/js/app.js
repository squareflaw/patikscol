(function() {

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuNav = document.querySelector('.menu-nav');
const NavItems = document.querySelectorAll('.menu-nav__item');



menuBtn.addEventListener('click', function(e) {    
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    NavItems.forEach(item => item.classList.toggle('show'));
});


})();
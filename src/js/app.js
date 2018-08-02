(function() {

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuNav = document.querySelector('.menu-nav');
const NavItems = document.querySelectorAll('.menu-nav__item');



menuBtn.addEventListener('click', function(e) {    
    menuBtn.classList.toggle('isClosed');
    header.classList.toggle('isShown');    
    menu.classList.toggle('isShown');
    menuNav.classList.toggle('isShown');
    NavItems.forEach(item => item.classList.toggle('isShown'));
});

window.addEventListener('scroll', function(e) {
    let onTop = window.scrollY;
    if (!onTop) {
      header.classList.remove('scroll');
      menuBtn.classList.remove('scroll');
    }else {
      header.classList.add('scroll');
      menuBtn.classList.add('scroll');
    }
});


})();
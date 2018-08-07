(function() {

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const menuNav = document.querySelector('.menu-nav');
const NavItems = document.querySelectorAll('.menu-nav__item');

const seeInfoBtn = document.querySelectorAll('.seeInfoBtn');



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


seeInfoBtn.forEach(item =>
  
  item.addEventListener('click', function(e) {
    
    item.classList.toggle('isClicked');

    if (item.innerHTML == 'Ver info') {
      item.innerHTML = 'Ocultar';      
    }else {
      item.innerHTML = 'Ver info';            
    }    
}));

console.clear();

console.log('paso el mio ablame cloro');
console.log('todo bien?');



})();
'use strict';

(function () {

  var header = document.querySelector('.header');
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.menu');

  var menuNav = document.querySelector('.menu-nav');
  var NavItems = document.querySelectorAll('.menu-nav__item');

  var seeInfoBtn = document.querySelectorAll('.seeInfoBtn');

  menuBtn.addEventListener('click', function (e) {
    menuBtn.classList.toggle('isClosed');
    header.classList.toggle('isShown');
    menu.classList.toggle('isShown');
    menuNav.classList.toggle('isShown');
    NavItems.forEach(function (item) {
      return item.classList.toggle('isShown');
    });
  });

  window.addEventListener('scroll', function (e) {
    var onTop = window.scrollY;
    if (!onTop) {
      header.classList.remove('scroll');
      menuBtn.classList.remove('scroll');
    } else {
      header.classList.add('scroll');
      menuBtn.classList.add('scroll');
    }
  });

  seeInfoBtn.forEach(function (item) {
    return item.addEventListener('click', function (e) {

      item.classList.toggle('isClicked');

      if (item.innerHTML == 'Ver info') {
        item.innerHTML = 'Ocultar';
      } else {
        item.innerHTML = 'Ver info';
      }
    });
  });
})();
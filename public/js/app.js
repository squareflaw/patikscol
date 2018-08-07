(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function () {

  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  const menuNav = document.querySelector('.menu-nav');
  const NavItems = document.querySelectorAll('.menu-nav__item');

  const seeInfoBtn = document.querySelectorAll('.seeInfoBtn');

  menuBtn.addEventListener('click', function (e) {
    menuBtn.classList.toggle('isClosed');
    header.classList.toggle('isShown');
    menu.classList.toggle('isShown');
    menuNav.classList.toggle('isShown');
    NavItems.forEach(item => item.classList.toggle('isShown'));
  });

  window.addEventListener('scroll', function (e) {
    let onTop = window.scrollY;
    if (!onTop) {
      header.classList.remove('scroll');
      menuBtn.classList.remove('scroll');
    } else {
      header.classList.add('scroll');
      menuBtn.classList.add('scroll');
    }
  });

  seeInfoBtn.forEach(item => item.addEventListener('click', function (e) {

    item.classList.toggle('isClicked');

    if (item.innerHTML == 'Ver info') {
      item.innerHTML = 'Ocultar';
    } else {
      item.innerHTML = 'Ver info';
    }
  }));
})();

},{}]},{},[1]);

//# sourceMappingURL=app.js.map

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
});
const swiperOne = new Swiper('.feedback__slider', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },



});

const swiperTwo = new Swiper('.certification__slider', {
  // Optional parameters

  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  breakpoints: {
    768: {
      slidesPerView: 3

    },
    480: {
      slidesPerView: 2

    },
    360: {
      slidesPerView: 1

    },
  },


});

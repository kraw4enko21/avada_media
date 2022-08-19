const menuBtn = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu__block')
const menuLinks = document.querySelectorAll('.header__BlockLink')
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("show")
    menuLinks.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('show')
        })
    })
})



let swiper = new Swiper('.swiperCenter', {
    loop: true,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
      },
    spaceBetween: 10,
    slidesPerView: 1,
});


let swiperFirst = new Swiper('.swiperFirst', {
    loop: true,
    initialSlide: 1,
    sliderPerView: 1
});



let swiperSecond = new Swiper('.swiperSecond', {
    loop: true,
    initialSlide: 1,
    sliderPerView: 1
});


swiperFirst.controller.control = swiper;
swiper.controller.control = swiperFirst;


swiperSecond.controller.control = swiper;
swiper.controller.control = swiperSecond;

swiperFirst.controller.control = swiperSecond;
swiperSecond.controller.control = swiperFirst;
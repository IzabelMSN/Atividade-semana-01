/*12 - Implemente um Carrossel no site de vocês usando esta biblioteca: https://swiperjs.com/get-started*/
const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    slidesPerView: 3,
    spaceBetween: 30,
    
})
  
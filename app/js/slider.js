// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 30,

//     breakpoints: {
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         }
//     },

//     // If we need pagination
//     pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     },
//     // Navigation arrows
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     },

//     // autoplay: {
//     //     delay: 5000,
//     //     disableOnInteraction: false,
//     // }
// });

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

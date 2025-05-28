// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 20,
//     enabled: true,

//     breakpoints: {
//         320: {
//             allowTouchMove: true,
//             slidesPerView: 1,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         480: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         768: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         1024: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1280: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1921: {
//             allowTouchMove: true,
//             slidesPerView: 4,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

// const swiperInfo = new Swiper('.swiper-info', {
//     slidesPerView: 1,
//     enabled: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

const swiperInfo = new Swiper('.swiper-info', {
    slidesPerView: 1,
    enabled: true,
  
    pagination: [
        {
          el: '.swiper-pagination-fraction',
          type: 'fraction',
          formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
          formatFractionTotal: (number) => number.toString().padStart(2, '0'),
        },
        {
          el: '.swiper-pagination-progressbar',
          type: 'progressbar',
        }
    ],
  
    navigation: {
      nextEl: '.swiper-controls__btn--next',
      prevEl: '.swiper-controls__btn--prev',
    },
  
    // scrollbar: {
    //   el: '.swiper-pagination-progressbar',
    //   draggable: true,
    // },
});

const swiperReview = new Swiper('.swiper-review', {
    spaceBetween: 20,

    breakpoints: {
        320: {
            allowTouchMove: true,
            slidesPerView: 1,
            initialSlide: 0,
        },
        480: {
            allowTouchMove: true,
            slidesPerView: 1
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3
        },
    },
    
    navigation: {
        nextEl: '.swiper-groups-next',
        prevEl: '.swiper-groups-prev',
    },
});
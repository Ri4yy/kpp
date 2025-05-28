document.addEventListener('DOMContentLoaded', () => {
    let infoCurrent = document.querySelector('.swiper-info-current');
    let infoTotal = document.querySelector('.swiper-info-total');
    const swiperInfo = new Swiper('.swiper-info', {
        slidesPerView: 1,
        enabled: true,
        effect: "fade",
        loop: true,
    
        on: {
            init: function () {
                updateCustomPagination(this, infoCurrent, infoTotal);
            },
            slideChange: function () {
                updateCustomPagination(this, infoCurrent, infoTotal);
            }
        },
    
        pagination: {
            el: ".swiper-pagination-info",
            type: "progressbar",
        },
      
        navigation: {
            nextEl: '.swiper-info-btn-next',
            prevEl: '.swiper-info-btn-prev',
        },
    });
    
    let reviewCurrent = document.querySelector('.swiper-review-current');
    let reviewTotal = document.querySelector('.swiper-review-total');
    const swiperReview = new Swiper('.swiper-review', {
        spaceBetween: 20,
        loop: true,
    
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
                slidesPerView: 2
            },
            1440: {
                allowTouchMove: true,
                slidesPerView: 3
            },
        },
    
        on: {
            init: function () {
                updateCustomPagination(this, reviewCurrent, reviewTotal);
            },
            slideChange: function () {
                updateCustomPagination(this, reviewCurrent, reviewTotal);
            }
        },
    
        pagination: {
            el: ".swiper-pagination-review",
            type: "progressbar",
        },
        
        navigation: {
            nextEl: '.swiper-review-btn-next',
            prevEl: '.swiper-review-btn-prev',
        },
    });

    let storageCurrent = document.querySelector('.swiper-storage-current');
    let storageTotal = document.querySelector('.swiper-storage-total');
    const swiperStorage = new Swiper('.swiper-storage', {
        spaceBetween: 64,
        loop: true,
    
        breakpoints: {
            320: {
                allowTouchMove: true,
                slidesPerView: 1,
                initialSlide: 0,
            },
            480: {
                allowTouchMove: true,
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1025: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1280: {
                spaceBetween: 32,
                slidesPerView: 3
            },
        },
    
        on: {
            init: function () {
                updateCustomPagination(this, storageCurrent, storageTotal);
            },
            slideChange: function () {
                updateCustomPagination(this, storageCurrent, storageTotal);
            }
        },
    
        pagination: {
            el: ".swiper-pagination-storage",
            type: "progressbar",
        },
        
        navigation: {
            nextEl: '.swiper-storage-btn-next',
            prevEl: '.swiper-storage-btn-prev',
        },
    });
    
    function updateCustomPagination(swiper, currentNumber, totalNumber) {
        const current = swiper.realIndex + 1;
        const total = swiper.slides.length;
    
        currentNumber.textContent = current.toString().padStart(2, '0');
        totalNumber.textContent = total.toString().padStart(2, '0');
    }
})

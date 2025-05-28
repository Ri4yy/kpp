document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.header-mobile'),
        btnMenu = document.querySelector('.btn-menu'),
        html = document.querySelector('html'),
        menuLink = document.querySelectorAll('.header-mobile__link');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
        html.classList.toggle('no-scroll')
    })
    menuLink.forEach(el => {
        el.addEventListener('click', (e) => {
            menu.classList.remove('open')

            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        })
    });

    function resize() {
        let width = window.innerWidth;

        if (width > 1280) {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    // Модальное окно
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function () {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    showModal($('.open-modal'), $('.modal-form'));

    // Toggler catalog
    const dropdownToggles = document.querySelectorAll('.catalog-card__dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            const dropdown = toggle.closest('.catalog-card__dropdown');
            dropdown.classList.toggle('open');
            
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdown = otherToggle.closest('.catalog-card__dropdown');
                    otherDropdown.classList.remove('open');
                }
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.catalog-card__dropdown')) {
            const openDropdowns = document.querySelectorAll('.catalog-card__dropdown.open');
            
            openDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });

    // Dropdown
    let faqToggle = document.querySelectorAll('.faq-dropdown__toggle')

    faqToggle.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let container = e.target.closest('.faq-dropdown__item');
            container.classList.toggle('open')
        })
    })
})
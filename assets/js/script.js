document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
    btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('menu--open')

        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 768) {
            menu.classList.remove('menu--open')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

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
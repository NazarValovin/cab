
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    function goToLink(selectorElement) {
        const scrollTarget = document.querySelector(selectorElement);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    }


    // Slider Swiper

    function sliderSwiper() {

    }
    sliderSwiper();

    const sliderGalery = document.querySelector('.galery-modal__slider');

    const swiperGaleryP = new Swiper(sliderGalery, {
        slidesPerView: 1,
        // initialSlide: number,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //==============================================================

    //Burger

    function burgerClick() {
        const menu = document.querySelector('.header__menu');
        const menuWrapper = document.querySelector('.modal-header__wrapper');
        const phone = document.querySelector('.header__phone');
        const modal = document.querySelector('.modal-header');
        const body = document.body;

        if (menu) {
            menu.addEventListener('click', () => {
                menu.classList.toggle('_active');
                modal.classList.toggle('_active');
                body.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 380) {
                menuWrapper.insertAdjacentElement('beforeend', phone);
            }
        }
    }
    burgerClick();

    //==============================================================


    // Header Menu Link Click

    function sectionToLink(sections, link) {
        for (let index = 0; index < sections.length; index++) {
            const section = sections[index];
            if (section.dataset.section === link.dataset.link) {
                goToLink(`[data-section='${section.dataset.section}']`);
            }
        }
    }

    function clickHeaderLick() {
        const links = document.querySelectorAll('[data-link]');
        const sections = document.querySelectorAll('[data-section]');
        const menu = document.querySelector('.header__menu');
        const modal = document.querySelector('.modal-header');
        const body = document.body;
        if (links.length > 0) {
            for (let index = 0; index < links.length; index++) {
                const link = links[index];
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    sectionToLink(sections, link);
                    if (menu.classList.contains('_active')) {
                        menu.classList.remove('_active');
                        modal.classList.remove('_active');
                        body.classList.remove('_active');
                    }
                });
            }
        }
    }
    clickHeaderLick();

    //====================================================================



    // Relocation Item

    function relocaationItems() {
        const chooseTitle = document.querySelector('.choose__colums-center h2');
        const chooseWrapper = document.querySelector('.choose__wrapper');

        if (chooseTitle) {
            if (document.documentElement.clientWidth <= 768) {
                chooseWrapper.insertAdjacentElement('beforebegin', chooseTitle);
            }
        }
    }
    relocaationItems();

    //==============================================================


    // Input Modal

    function inputModalChange() {
        const inputs = document.querySelectorAll('.modal__body input');
        const textarea = document.querySelector('.modal__body textarea');
        if (inputs.length > 0) {
            for (let index = 0; index < inputs.length; index++) {
                const input = inputs[index];
                const parent = input.parentElement;

                input.addEventListener('change', () => {
                    if (input.value != '') {
                        parent.classList.add('_go');
                    } else {
                        parent.classList.remove('_go');
                    }
                });
            }
            textarea.addEventListener('change', () => {
                const parent = textarea.parentElement;
                if (textarea.value != '') {
                    parent.classList.add('_go');
                } else {
                    parent.classList.remove('_go');
                }
            });
        }
    }
    inputModalChange();

    //===================================================================

    // Open Modal

    function openModal() {
        const btns = document.querySelectorAll('[data-modal');
        const modal = document.querySelector('.modal');
        const modalClose = document.querySelector('.modal__close');
        const menu = document.querySelector('.header__menu');
        const modalHeader = document.querySelector('.modal-header');
        const body = document.body;

        if (modal) {
            for (let index = 0; index < btns.length; index++) {
                const btn = btns[index];
                btn.addEventListener('click', () => {
                    modal.classList.add('_active');
                    body.classList.add('_active');
                    if (menu.classList.contains('_active')) {
                        menu.classList.remove('_active');
                        modalHeader.classList.remove('_active');
                    }
                });
            }
            modalClose.addEventListener('click', () => {
                modal.classList.remove('_active');
                body.classList.remove('_active');
            });
        }
    }
    openModal();

    //======================================================================


    // Click Items Galery Content

    function itemsGallery() {
        const items = document.querySelectorAll('.galery-content__wrapp');
        const modal = document.querySelector('.galery-modal');
        const modalClose = document.querySelector('.galery-modal__close');
        const body = document.body;

        if (items.length > 0) {
            for (let index = 0; index < items.length; index++) {
                const item = items[index];
                item.addEventListener('click', () => {
                    modal.classList.add('_active');
                    body.classList.add('_active');
                    swiperGaleryP.slideTo(index);
                });
            }
            modalClose.addEventListener('click', () => {
                modal.classList.remove('_active');
                body.classList.remove('_active');
            });
        }
    }
    itemsGallery();

    //===========================================================================














});
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";


const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "";
});



try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
            },
        },

        modules: [Navigation, Pagination],
    }); ''
} catch (e) { }



try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    const getDisplayMode = () => {
        return window.innerWidth >= 768 ? "grid" : "flex";
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            tabs.forEach((t) => {
                t.classList.remove("catalog__tab_active");
            });

            contents.forEach((content) => {
                content.style.display = "none";
            });

            tab.classList.add("catalog__tab_active");

            contents[index].style.display = getDisplayMode();
        });
    });

    contents.forEach((content, index) => {
        content.style.display = index === 0
            ? getDisplayMode()
            : "none";
    });

    window.addEventListener("resize", () => {
        contents.forEach((content) => {
            if (content.style.display !== "none") {
                content.style.display = getDisplayMode();
            }
        });
    });

} catch (e) {
}
import { initialCenemas } from "./src/js/initialCenemas";
import { initialCommentsSlider } from "./src/js/initialCommentsSlider";
import { initialFaq } from "./src/js/initialFaq";
import { initialFreeMoviesSlider } from "./src/js/initialFreeMoviesSlider";
import { initialNavbarMenu } from "./src/js/initialNavbarMenu";
import { initialPopularMovies } from "./src/js/initialPopularMovies";
import { getMenuItems } from "./src/utils/api";
initialNavbarMenu();

new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 5000,
  centeredSlides: true,
});

initialPopularMovies();

initialFreeMoviesSlider();

new Swiper(".free-movies-swiper", {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

initialCenemas();

initialCommentsSlider();

new Swiper(".comments-swiper", {
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

initialFaq();

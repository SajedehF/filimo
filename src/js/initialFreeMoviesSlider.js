import { getMovies } from "../utils/api";
import { toggleActiveClass } from "../utils/functions";

export const initialFreeMoviesSlider = async () => {
  const freeMovies = await getMovies({ cashType: "free" });

  const movies = freeMovies.map(
    ({ title, image }) => `
    <div class="swiper-slide">
      <div class="relative free-movie-card transition-all duration-500 brightness-50">
        <span class="absolute top-1 right-2 z-10 text-xs bg-green-950 text-green-500 py-1 px-2 rounded-full">رایگان</span>
        <img src="${image}" alt="${title}" class="rounded-lg cursor-pointer mb-2" />
        <p class="text-[10px] lg:text-xs lg:font-bold">${title}</p>
      </div>
    </div>
  `
  );

  const moviesContainer = document.querySelector(
    ".free-movies-swiper > .swiper-wrapper"
  );
  moviesContainer.insertAdjacentHTML("afterbegin", movies.join(""));

  const movieCards = document.querySelectorAll(".free-movie-card");
  movieCards.forEach((card) => {
    card.addEventListener("click", (e) =>
      toggleActiveClass(e, "free-movie-card-active")
    );
  });
};

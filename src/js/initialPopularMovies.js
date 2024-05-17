import { getMovies } from "../utils/api";
import { toggleActiveClass } from "../utils/functions";

const updateMoviesList = async () => {
  const activeMovieOption = document.querySelector(
    ".movie-filter-option-active"
  );
  const popularMovies = await getMovies({ movieType: activeMovieOption.value });

  const movies = popularMovies.map((movie, index) => {
    const { title, image, isSpecialMovie } = movie;
    const imgClass = "movie-card-img block w-full rounded-lg cursor-pointer";
    let movieCardClass =
      "movie-card transition-all duration-500 brightness-50 hover:brightness-100";

    if (index == 0) {
      movieCardClass = movieCardClass + " movie-card-active";
    }

    if (isSpecialMovie)
      return `<div class="relative ${movieCardClass}">
                <img src="${image}" alt="${title}" class="${imgClass}" />
                <span class="text-[8px] md:text-[10px] lg:text-xs font-light absolute w-full text-center bottom-0 py-1.5 bg-black/50 backdrop-blur-md rounded-b-lg">اختصاصی 
                  <span class="text-amber-500 font-black">فیلیمو</span>
                </span>
              </div>`;

    return `<div class="${movieCardClass}">
              <img src="${image}" alt="${title}" class="${imgClass}" />
            </div>`;
  });

  const moviesContainer = document.querySelector("#popular-movies");
  moviesContainer.innerHTML = "";
  moviesContainer.insertAdjacentHTML("afterbegin", movies.join(""));

  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card) => {
    card.addEventListener("click", (e) =>
      toggleActiveClass(e, "movie-card-active")
    );
  });
};

export const initialPopularMovies = () => {
  const movieOptions = document.querySelectorAll(".movie-filter-option");
  movieOptions.forEach((opt) =>
    opt.addEventListener("click", async (e) => {
      toggleActiveClass(e, "movie-filter-option-active");
      await updateMoviesList();
    })
  );

  updateMoviesList();
};

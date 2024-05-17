import { getComments } from "../utils/api";

export const initialCommentsSlider = async () => {
  const comments = await getComments();

  const commentsList = comments.map((item) => {
    const { username, text } = item;

    return `
        <div class="swiper-slide">
            <div class="bg-black/10 rounded-xl px-6 pt-6 min-h-48 border border-white/10">
                <p class="text-sm lg:text-base text-white/60 mb-5">${username}</p>
                <p class="text-xs text-white/80 lg:text-sm">${text}</p>
            </div>
        </div>
    `;
  });

  const commentsContainer = document.querySelector("#comments-container > .swiper-wrapper");
  commentsContainer.insertAdjacentHTML("afterbegin", commentsList.join(""));
};

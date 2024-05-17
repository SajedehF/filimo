import { getCenemas } from "../utils/api";

export const initialCenemas = async () => {
  const cenemas = await getCenemas();

  const cenemasList = cenemas.map((item) => {
    const { title, director, tags, image } = item;

    return `
    <div class="border border-white/20 p-2 md:p-4 rounded-xl bg-white/5 backdrop-blur-2xl flex">
      <div>
        <img src="${image}" alt="${title}" class="rounded-lg w-28 lg:w-auto" />
      </div>
      <div class="flex flex-1 flex-col justify-between text-[8px] md:text-[10px] lg:text-xs px-3">
        <div class="flex justify-between">
          <h3 class="font-black text-sm">${title}</h3>
          <span class="font-semibold bg-black/50 grid items-center py-1 px-3 rounded-full">اکران آنلاین</span>
        </div>
        <div class="font-light">
          <p>کارگردان: ${director}</p>
        </div>
        <div>
          ${tags
            .map(
              (tag) =>
                `<span class="bg-black/20 py-1 px-3 rounded-full">${tag}</span>`
            )
            .join(" ")}
        </div>
        <div class="">
          <button class="border rounded-md lg:rounded-lg p-1.5 md:p-2.5">خرید بلیت</button>
        </div>
      </div>
    </div>
  `;
  });

  const cenemasContainer = document.querySelector("#cenemas-container");
  cenemasContainer.insertAdjacentHTML("afterbegin", cenemasList.join(""));
};

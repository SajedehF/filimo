import { getFaq } from "../utils/api";
import { toggleActiveClass } from "../utils/functions";

export const initialFaq = async () => {
  const faq = await getFaq();

  const faqList = faq.map((item) => {
    const { question, answer } = item;

    return `
        <div class="border border-white/10 px-4 text-[10px] md:text-xs lg:text-sm rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 h-fit">
            <div class="faq-question font-semibold cursor-pointer py-4 transition-colors duration-500 flex items-center justify-between">${question} <img src="plus.svg" alt="آیکون" class="faq-icon w-3 h-3 transition-transform duration-500"></div>
            <div class="faq-answer text-white/60 h-0 overflow-hidden opacity-0 transition-all duration-500">${answer}</div>
        </div>
    `;
  });

  const faqContainer = document.querySelector("#faq-container");
  faqContainer.insertAdjacentHTML("afterbegin", faqList.join(""));

  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((faq) => {
    faq.addEventListener("click", (e) => {
      toggleActiveClass(e, "faq-question-active");
    });
  });
};

import { getMenuItems } from "../utils/api";

export const initialNavbarMenu = async () => {
  const menuItems = await getMenuItems();

  const menu = menuItems.map(
    ({ href, text }) =>
      `<li><a href="${href}" class="hover:text-amber-500 transition-all px-6">${text}</a></li>`
  );
  document
    .querySelector("ul.menu")
    .insertAdjacentHTML("afterbegin", menu.join(""));
  document
    .querySelector("ul.mobile-menu")
    .insertAdjacentHTML("afterbegin", menu.join(""));

  const mobileMenuToggler = document.querySelector("#mobile-menu-toggle");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  mobileMenuToggler.addEventListener("click", () => {
    mobileMenuContainer.classList.add("mobile-menu-active");
  });

  const mobileMenuCloser = document.querySelector("#mobile-menu-close");
  mobileMenuCloser.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("mobile-menu-active");
  });
};

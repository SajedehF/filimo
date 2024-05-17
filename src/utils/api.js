import { filterByQuery } from "./functions";

export const getMenuItems = async () => {
  const { "menu-items": menuItems } = await fetch(
    "https://sajedehf.github.io/filimo-db/db.json"
  ).then((res) => res.json());
  return menuItems;
};

export const getMovies = async (query) => {
  const { movies } = await fetch(
    "https://sajedehf.github.io/filimo-db/db.json"
  ).then((res) => res.json());

  if (Object.keys(query).length) return filterByQuery(movies, query);
  return movies;
};

export const getCenemas = async () => {
  const { cenemas } = await fetch(
    "https://sajedehf.github.io/filimo-db/db.json"
  ).then((res) => res.json());
  return cenemas;
};

export const getComments = async () => {
  const { comments } = await fetch(
    "https://sajedehf.github.io/filimo-db/db.json"
  ).then((res) => res.json());
  return comments;
};

export const getFaq = async () => {
  const { faq } = await fetch(
    "https://sajedehf.github.io/filimo-db/db.json"
  ).then((res) => res.json());
  return faq;
};

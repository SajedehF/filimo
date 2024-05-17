export const clearActiveClasses = (activeClass) => {
  document
    .querySelectorAll("." + activeClass)
    .forEach((item) => item.classList.remove(activeClass));
};

export const toggleActiveClass = (event, activeClass) => {
  const result = event.currentTarget.classList.contains(activeClass);
  clearActiveClasses(activeClass);

  if (result) {
    event.currentTarget.classList.remove(activeClass);
  } else {
    event.currentTarget.classList.add(activeClass);
  }
};

export function filterByQuery(array, query) {
  return array.filter((item) => {
    return Object.keys(query).every((key) => {
      return item.hasOwnProperty(key) && item[key] === query[key];
    });
  });
}

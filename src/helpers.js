// local storage
export const fetchData = (key) => {
  // look localStorage and find item based on key
  return JSON.parse(localStorage.getItem(key));
};

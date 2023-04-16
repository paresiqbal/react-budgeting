// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

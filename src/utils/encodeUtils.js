export const encodeObject = (obj) => {
  return btoa(JSON.stringify(obj));
};

export const decodeObjectString = (str) => {
  return JSON.parse(atob(str));
};

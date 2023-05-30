export const setAuthStorage = (obj) => {
  localStorage.setItem("auth", JSON.stringify(obj));
};

export const getAuthStorage = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

export const removeAuthStorage = () => {
  localStorage.removeItem("auth");
};

// utils/auth.js
export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  return JSON.parse(atob(token.split(".")[1]));
};
export default { getUser };
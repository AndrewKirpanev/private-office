export const isBrowser = () => typeof window !== "undefined";
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));
export const handleLogin = ({ username, password }) => {
  if (
    username === process.env.GATSBY_AUTH_LOGIN &&
    password === process.env.GATSBY_AUTH_PASSWORD
  ) {
    return setUser({
      username: `andrew`,
      name: `Andrew`,
      email: `spacewebdeveloper@gmail.com`
    });
  }
  return false;
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};
export const logout = callback => {
  setUser({});
  callback();
};

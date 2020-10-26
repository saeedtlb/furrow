export default {
  currentTheme: window.localStorage.getItem("theme")
    ? window.localStorage.getItem("theme")
    : "dark",
  cursorType: false,
  cursorStyles: ["pointer", "hovered", "locked", "white"],
  toggleMenu: false,
};

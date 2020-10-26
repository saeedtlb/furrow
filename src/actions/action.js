import { TOGGLE_THEME, CURSOR, TOGGLE_MENU } from "./types";

export const toggle_theme = _theme => ({
  type: TOGGLE_THEME,
  theme: _theme === "dark" ? "light" : "dark",
});

export const cursor_style = cursorType => ({
  type: CURSOR,
  cursorType,
});

export const change_Menu = status => ({
  type: TOGGLE_MENU,
  menu: !status,
});

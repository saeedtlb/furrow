import { TOGGLE, CURSOR } from "./types"

export const toggle_theme = _theme => ({
  type: TOGGLE,
  theme: _theme === "dark" ? "light" : "dark",
})

export const cursor_style = cursorType => ({
  type: CURSOR,
  cursorType,
})

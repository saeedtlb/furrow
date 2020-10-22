import { TOGGLE } from "./types"

export const toggle_theme = _theme => ({
  type: TOGGLE,
  theme: _theme === "dark" ? "light" : "dark",
})

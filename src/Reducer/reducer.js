import { TOGGLE_THEME, CURSOR, TOGGLE_MENU } from "../actions/types";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: action.theme,
      };
    case CURSOR:
      return {
        ...state,
        cursorType: action.cursorType,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: action.menu,
      };
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
};

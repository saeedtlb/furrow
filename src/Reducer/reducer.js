import { TOGGLE, CURSOR } from "../actions/types"

export const globalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        currentTheme: action.theme,
      }
    case CURSOR:
      return {
        ...state,
        cursorType: action.cursorType,
      }
    default:
      throw new Error("Unhandled action type: " + action.type)
  }
}

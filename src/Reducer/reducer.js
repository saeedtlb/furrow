import { TOGGLE } from "../actions/types"

export const globalReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        currentTheme: action.theme,
      }
    default:
      throw new Error("Unhandled action type: " + action.type)
  }
}

import React, { createContext, useReducer, useContext } from "react"

// REDUCER
import { globalReducer } from "../Reducer/reducer"

// STORE
import initialStore from "./store"

// Define the context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialStore)

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)

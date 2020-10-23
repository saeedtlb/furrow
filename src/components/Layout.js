import React from "react"
import PropTypes from "prop-types"

// STYLED-COMPONENT
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// COMPONENTS
import Header from "./Header"
import Cursor from "./CustomCursor"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
        cursor: none;
    }
    
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`

const darkTheme = {
  background: "#000",
  text: "#fff",
  red: "#ea291e",
}

const lightTheme = {
  background: "#fff",
  text: "#000",
  red: "#ea291e",
}

const Layout = ({ children }) => {
  const { currentTheme } = useGlobalStateContext()
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
}

export default Layout

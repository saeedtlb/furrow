import React, { useState } from "react";
import PropTypes from "prop-types";

// STYLED-COMPONENT
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// COMPONENTS
import Header from "./Header";
import Cursor from "./CustomCursor";
import Navigation from "./Navigation";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { cursor_style } from "../actions/action";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
        /* cursor: none; */
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
`;

const darkTheme = {
  background: "#000",
  text: "#fff",
  red: "#ea291e",
};

const lightTheme = {
  background: "#fff",
  text: "#000",
  red: "#ea291e",
};

const Layout = ({ children }) => {
  const { cursorStyles, currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = type => {
    type = cursorStyles.includes(type) && type;
    dispatch(cursor_style(type));
  };

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header onCursor={type => onCursor(type)} />
      <Navigation onCursor={type => onCursor(type)} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;

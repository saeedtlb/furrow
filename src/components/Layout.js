import React, { useState } from "react";
import PropTypes from "prop-types";

// STYLED-COMPONENT
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// COMPONENTS
import Header from "./Header";
import Cursor from "./CustomCursor";
import Navigation from "./Navigation";
import Footer from "./Footer";

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
        cursor: none;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
    
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        scrollbar-width: none;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`;

const Layout = ({ children }) => {
  const { cursorStyles, currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 });

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const onCursor = type => {
    type = cursorStyles.includes(type) && type;
    dispatch(cursor_style(type));
  };

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header onCursor={onCursor} setHamburgerPosition={setHamburgerPosition} />
      <Navigation onCursor={onCursor} />
      <main>{children}</main>
      <Footer onCursor={onCursor} setHamburgerPosition={setHamburgerPosition} />
    </ThemeProvider>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired,
};

export default Layout;

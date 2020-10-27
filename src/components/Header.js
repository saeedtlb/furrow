import React, { useEffect } from "react";
import { Link } from "gatsby";

// STYLED-COMPONENT
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";
import { Container, Flex } from "../styles/globalStyles";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { toggle_theme, change_Menu } from "../actions/action";

const Header = ({ onCursor }) => {
  const { currentTheme, toggleMenu } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => dispatch(toggle_theme(currentTheme));

  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo onMouseOver={() => onCursor("hovered")} onMouseOut={onCursor}>
            <Link to="/">FURR</Link>
            <span
              onMouseMove={() => onCursor("pointer")}
              onMouseOut={onCursor}
              onClick={toggleTheme}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu onClick={() => dispatch(change_Menu(toggleMenu))}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;

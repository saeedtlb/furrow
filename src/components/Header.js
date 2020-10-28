import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";

// STYLED-COMPONENT
import { HeaderNav, Logo, Menu } from "../styles/headerStyles";
import { Container, Flex } from "../styles/globalStyles";

// CUSTOM-HOOK
import useElementPosition from "../hooks/useElementPosition";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { toggle_theme, change_Menu } from "../actions/action";

const Header = ({ onCursor, setHamburgerPosition }) => {
  const { currentTheme, toggleMenu } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => dispatch(toggle_theme(currentTheme));

  const menuHover = () => {
    onCursor("locked");
    setHamburgerPosition({
      x: position.x,
      y: position.y + 72,
    });
  };

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
          <Menu
            ref={hamburger}
            onClick={() => dispatch(change_Menu(toggleMenu))}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
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

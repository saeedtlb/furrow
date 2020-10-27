import React, { useEffect, useState } from "react";

// STYLED-COMPONENT
import { CustomCursor } from "../styles/globalStyles";

// CONTEXT
import { useGlobalStateContext } from "../context/globalContext";

const Cursor = () => {
  const { cursorType, toggleMenu } = useGlobalStateContext();
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  });

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = e => {
    const { clientX: x, clientY: Y } = e;
    const y = Y + window.scrollY;

    setMousePosition({ x, y });
  };

  return (
    <>
      <CustomCursor
        className={`${cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;

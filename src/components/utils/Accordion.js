import React, { useState } from "react";

// STYLED-COMPONENT
import {
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles";

// ANIMATION
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// CONTEXT
import { useGlobalStateContext } from "../../context/globalContext";

const Accordion = ({ details, onCursor }) => {
  const [expanded, setExpanded] = useState(0);
  const [hovered, setHovered] = useState(false);
  const isOpen = details.id === expanded;
  const { currentTheme } = useGlobalStateContext();

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onHoverStart={() => setHovered(true)}
        onHoverStart={() => setHovered(false)}
        whileHover={{
          color: currentTheme === "dark" ? "#fff" : "#000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, i) => {
          <span key={i}>{result}</span>;
        })}
        <span>kimi</span>
        <span>Lewis</span>
        <span>Leclerc</span>
      </AccordionContent>
    </>
  );
};

export default Accordion;
